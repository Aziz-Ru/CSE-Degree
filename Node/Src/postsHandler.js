const express = require("express");
const jwt = require("jsonwebtoken");
const prisma = require("../prisma/script.js");
const router = express.Router();
const AuthGurd = require("../middlewares/AuthMiddleware.js");

// Get all post of user
router.get("/", AuthGurd, async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      where: { author: { id: req.userId } },
    });
    res.status(200).json({ data: posts });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

// get post by id
router.get("/:id", AuthGurd, async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    const post = await prisma.post.findFirst({
      where: { id: parseInt(id), author: { id: req.userId } },
    });
    res.status(200).json({ data: post });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});
// Create New Post

router.post("/create", AuthGurd, async (req, res) => {
  try {
    const { title, content, published } = req.body;
    if (title && content) {
      const post = await prisma.post.create({
        data: {
          title: title,
          content: content,
          published: published,
          author: {
            connect: {
              id: req.userId,
            },
          },
        },
      });
      res.status(200).json({ message: "succesfully create post" });
    } else {
      res.status(401).json({ Error: "Something Missing" });
    }
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

//update post
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updateData = {};
    if (title) {
      updateData.title = title;
    }
    if (content) {
      updateData.content = content;
    }
    const post = await prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: updateData,
    });
    res.status(200).json({ message: "Successfully Update" });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});
module.exports = router;
