const createError = require("http-errors");
const express = require("express");
const http = require("http");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { Server } = require("socket.io");
const indexRouter = require("./routes/index");
const socketRouter = require("./routes/socketRouter");
const usersRouter = require("./routes/users");
const { mongo, default: mongoose } = require("mongoose");

var app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

mongoose
  .connect("mongodb://localhost:27017/flutter", {})
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log("Error connecting to database", err));

// view engine setup

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/todos", indexRouter);
// app.use("/socket", socketRouter(io));

io.on("connection", (socket) => {
  console.log("socket Connected");
  let cnt = 0;
  socket.emit("message", "Hello CLient");

  socket.on("message", (message) => {
    console.log(message);

    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        socket.emit("message", `Hello Client ${i}`);
      }, i * 1000);
    }
  });

  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).json({ error: err.message });
});

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
