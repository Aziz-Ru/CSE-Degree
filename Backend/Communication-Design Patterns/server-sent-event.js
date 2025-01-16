const express = require("express");
const jobs = {};
const app = express();

app.get("/submit", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.write("data: \n\n");
  sendContent(res);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

let i = 0;
function sendContent(res) {
  res.write("data: " + i + "\n\n");
  i++;
  setTimeout(() => {
    sendContent(res);
  }, 2000);
}
