const express = require("express");

const AuthHandler = require("./Auth/AuthHandler");
const postHandler = require("./Src/postsHandler");
const dotenv = require("dotenv");

const schoolHandler = require("./Routes/SchoolHandler");
const classRoomHandler = require("./Routes/classroomHandler");
const courseHandler = require("./Routes/courseHandler");
const { errorHandler } = require("./middlewares/errorHandler");
const app = express();

app.use(express.json());
dotenv.config();

app.use("/auth", AuthHandler);
app.use("/post", postHandler);

app.use("/school", schoolHandler);
app.use("/class", classRoomHandler);
app.use("/courses", courseHandler);

app.use(errorHandler);

app.listen(8080, () => {
  console.log("Server is running in port 5000");
});
