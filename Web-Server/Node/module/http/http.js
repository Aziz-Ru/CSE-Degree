import express from "express";

const app = express();

app.get("/", (req, res) => {
  req.is("application/json");
    
  res.send("Hello World!");
});

app.listen(8080, () => {
  console.log("Server is running on port 3000");
});
