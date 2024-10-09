var express = require("express");
var router = express.Router();
const Todo = require("../model/todoSchema");
/* GET home page. */
router.get("/", async (req, res, next) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json({ todos });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const body = req.body;
    const todo = await Todo.create(body);
    return res.status(201).json({ todo });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const todo = await Todo.findById({ _id: id });
    // console.log(todo);
    todo.title = body.title;
    todo.content = body.content;
    todo.pusblished = body.pusblished;
    await todo.save();
    return res.status(200).json({ todo });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
