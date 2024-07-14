const express = require("express");
const bodyParser = require("body-parser");
// const csrf = require("csurf");

const app = express();
app.use(express.json({ type: "application/json" }));
// app.use(bodyParser.json({ type: "application/json" }));

app.post("/", (req, res) => {
  console.log(req.body);
  res.send({ message: "success" });
});

app.listen(8080, () => {
  console.log("server is running");
});


