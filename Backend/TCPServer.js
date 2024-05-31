const net = require("net");

const server = net.createServer((socket) => {
  socket.write("Hello World");
  socket.on("data", (data) => {
    console.log(data.toString());
  });
});

server.listen(8080, () => {
  console.log("Server is Running On Port 8080");
});

// CLI->telnet 127.0.0.1 8080
