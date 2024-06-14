// Import the top-level function of express
import express from "express";
import childproces from 'child_process'
// Creates an Express application using the top-level function
const app = express();


// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get("/", (req, res) => {
  res.send("Hello World");
});
// Make the app listen on port 3000
app.listen(8080, () => {
  console.log("Server is Running on Port 8080");
});
