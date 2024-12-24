const fs = require("fs");

const readableString = fs.readFileSync("./a.txt", "utf-8");

console.log(readableString);

const readStream = fs.createReadStream("./a.txt", "utf-8");

readStream.on("data", (chunk) => {
  console.log("Received chunk", chunk.toString());
});

readStream.on("end", () => {
  console.log("Finised reading file");
});
