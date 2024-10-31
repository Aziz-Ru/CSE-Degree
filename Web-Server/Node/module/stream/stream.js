const fs = require("fs");
const path = require("path");

const destination = path.join(__dirname, "hello.txt");
fs.readFile(destination, (err, data) => {
  console.log("File Read");
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
});

fs.writeFile(destination, "Hello World, How are You", (err) => {
  console.log("File Written");
  if (err) {
    console.error(err);
  }
});
