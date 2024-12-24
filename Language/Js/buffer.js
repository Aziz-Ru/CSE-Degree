const fs = require("node:fs");
const { Buffer } = require("node:buffer");
const str = "aiziiajd";
const fixedSizedBuf = Buffer.alloc(10);
const fixedSizedBufa = Buffer.alloc(10, "a");
console.log(fixedSizedBufa);
console.log(fixedSizedBuf);

for (let i = 0; i < str.length; i++) {
  fixedSizedBuf[i] = str.charCodeAt(i);
}
console.log(fixedSizedBuf);

const buf = Buffer.from("Hello World", "base64");

console.log(buf);

const readableString = fs.readFileSync("./a.txt", "utf-8");

console.log(readableString);

const readStream = fs.createReadStream("./a.txt", "utf-8");

readStream.on("data", (chunk) => {
  console.log("Received chunk", chunk.toString());
});

readStream.on("end", () => {
  console.log("Finised reading file");
});

const beforeTEXT = fs.readFileSync("./b.txt", "utf-8");

fs.writeFileSync(
  "./b.txt",
  `${beforeTEXT} \nThe mode option only affects the newly created file. See open for more
   details The mode option only affects the newly created file. See open for more details`
);
