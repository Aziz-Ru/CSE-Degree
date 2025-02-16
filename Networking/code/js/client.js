import net from "net";
import readline from "readline";

const client = new net.Socket();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

client.connect(3000, "127.0.0.1", () => {
  console.log("Connected to server");
  const q = rl.question("Enter Command:", (cmd) => {
    client.write(cmd);
  });
});

client.on("data", (data) => {
  console.log(data.toString());
  const q = rl.question("Enter Command", (cmd) => {
    client.write(cmd);
  });
});
("");
client.on("close", () => {
  rl.close();
  client.destroy();
  process.exit(0);
});
