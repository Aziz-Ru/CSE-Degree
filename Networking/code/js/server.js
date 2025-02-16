import net from "net";

const server = net.createServer((socket) => {
  //Connection event
  socket.on("data", (data) => {
    if (data.toString().trim() === "Hi") {
      socket.write("Hello\n");
    } else if (data.toString().trim() === "Ok") {
      let cnt = 0;
      const interval = setInterval(() => {
        if (cnt >= 10) {
          clearInterval(interval);
        } else {
          cnt++;
          socket.write(`Ok\n`);
        }
      }, 1000);
    } else if (data.toString().trim() === "Date") {
      socket.write(`${new Date().toLocaleDateString()}\n`);
    } else {
      socket.write("Invalid Command\n");
    }
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
