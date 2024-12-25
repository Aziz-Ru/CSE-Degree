// Streams can be readable, writable, or both. All streams are instances of EventEmitter.

const { pipeline } = require("node:stream/promises");
const fs = require("node:fs");
const zlib = require("node:zlib");

async function run() {
  await pipeline(
    fs.createReadStream("./a.txt"),
    zlib.createGzip(),
    fs.createWriteStream("a.tar.gz")
  );
  console.log("Pipeline succeeded.");
}

run().catch(console.error);
