const htttp = require("http");
const WebSocket = require("websocket").server;

const server = htttp.createServer((req, res) => {
  console.log("We Have Received a Request");
});

server.listen(8080, () => {
  console.log("server is running on port 8080");
});
