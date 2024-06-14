const express = require("express");

const router = express.Router();
const prisma = require("../prisma/script");
router.get("/", async (req, res) => {
  const school = await prisma.school.findFirst({ where: { id: "1122" } });
  res.status(200).json({ data: school });
});

router.post("/", async (req, res) => {
  const { id, name, address } = req.body;
  await prisma.school.create({
    data: { id: id, name: name, address: address },
  });
  res.status(200).json({ message: "School Account Create Successfully" });
});

module.exports = router;
