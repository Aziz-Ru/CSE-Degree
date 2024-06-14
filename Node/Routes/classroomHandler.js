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

router.put("/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const updateData = {};
    if (req.body.name) {
      updateData.name = req.body.name;
    }
    if (req.body.monthlyFee) {
      updateData.monthlyFee = req.body.monthlyFee;
    }
    // console.log(updateData);
    const classroom = await prisma.classroom.update({
      where: { name: name },
      data: updateData,
    });

    // console.log(classroom);
    return res.status(200).json({ data: classroom });
  } catch (error) {
    return res
      .status(404)
      .json({ errors: error.message, message: "Classroom not Found" });
  }
});
router.delete("/:name", async (req, res) => {
  const { name } = req.params;
  try {
    await prisma.classroom.delete({ where: { name: name } });
    return res.status(200).json({ message: "Successfully Deleted Class" });
  } catch (error) {
    return res.status(404).json({ error: "Failed to Delete" });
  }
});

module.exports = router;
