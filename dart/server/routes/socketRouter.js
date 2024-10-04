const express = require("express");

const router = express.Router();

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("Connected");
    socket.on("message", () => {
      console.log(message);
    });
  });
  router.get("/", (req, res) => {
    res.status(200).json({ message: "Connected" });
  });

  return router;
};
