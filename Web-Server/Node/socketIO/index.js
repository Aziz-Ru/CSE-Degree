const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
// TypeError: Class constructor Server cannot be invoked without 'new'
const io = new Server(server);
// socket.io often requires you to pass an HTTP server instance.

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//this is websocket server
io.on("connection", (socket) => {
  console.log("User Connected");

  // server emits data

  socket.on("get_message", (data) => {
    console.log(data);
    socket.emit("sent_message", `${data}.this sent from server`);
  });

  //here we disconnecte specifiq client
  socket.on("disconnect", () => {
    console.log("Disconnected from server");
  });
});

server.listen(8080, () => {
  console.log(`Server is Runing On Port 8080`);
});
