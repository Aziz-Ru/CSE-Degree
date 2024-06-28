const express = require("express");

const AuthHandler = require("./Auth/AuthHandler");
const postHandler = require("./Src/postsHandler");
const dotenv = require("dotenv");

const { errorHandler } = require("./middlewares/errorHandler");
const app = express();

app.use(express.json());
dotenv.config();

app.use("/country", require("./Routes/CountryHandler"));
app.use(errorHandler);

app.listen(8080, () => {
  console.log("Server is running in port 8080");
});
