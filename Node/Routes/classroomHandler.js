const express = require("express");

const router = express.Router();
const prisma = require("../prisma/script");

router.get("/", async (req, res) => {
  const classrooms = await prisma.classroom.findMany();
  res.status(200).json({ data: classrooms });
});
router.get("/:name", async (req, res) => {
  const { name } = req.params;
  const classroom = await prisma.classroom.findUnique({
    where: { name: name },
  });
  if (classroom) {
    return res.status(200).json({ data: classroom });
  } else {
    return res.status(404).json({ error: "Not Found" });
  }
});
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    await prisma.classroom.create({ data: { name: name } });
    res.status(200).json({ message: "Class Created Successfully" });
  } catch (error) {
    res.status(404).json({ errors: error.message });
  }
});
router.put("/:name", async (req, res) => {});
router.delete("/:name", async (req, res) => {});

module.exports = router;
