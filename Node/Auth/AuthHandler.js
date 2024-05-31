const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../prisma/script");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ title: "Hello Auth" });
});
//sign-up route
router.post("/sign-up", async (req, res) => {
  const hashPassword = await bcrypt.hash(req.body.password, 10);

  try {
    const user = await prisma.user.findFirst({
      where: { name: req.body.username },
    });
    if (user) {
      res.send({ error: "User Already Exist" });
    }
    user = await prisma.user.create({
      data: {
        name: req.body.username,
        password: hashPassword,
      },
    });
    res.send({ message: "User Create Successfully" });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});
router.post("/sign-in", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { name: req.body.username },
    });
    if (user) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isValidPassword) {
        // Generate JWT Token
        const token = jwt.sign(
          { username: user.username, userId: user.id },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "1h" }
        );
        res
          .status(200)
          .json({ access_token: token, message: "Login Successfully" });
      } else {
        res.status(401).json({ error: "Authentication Failed" });
      }
    } else {
      res.status(401).json({ error: "Authentication Failed" });
    }
  } catch (error) {}
});

module.exports = router;
