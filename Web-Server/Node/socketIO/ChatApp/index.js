import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
const app = express();
const httpServer = createServer(app);
const socketServer = new Server(httpServer);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("chatapp/index");
});

socketServer.on("connection", (socket) => {
  console.log("Client connected Server");
  socket.on("chat message", (message) => {
    socketServer.emit("chat message", message);
  });
});

httpServer.listen(8080, () => {
  console.log("Server is Running On Port 8080");
});
