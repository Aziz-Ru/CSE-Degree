const express = require("express");
const prisma = require("../prisma/script");
const studentChecker = require("../middlewares/studentDataChecker");
const router = express.Router();

router
  .route("")
  .get(async (req, res) => {
    try {
      const students = await prisma.student.findMany();
      return res.status(200).json({ data: students });
    } catch (error) {
      return res.status(404).json({ error: error.meta.cause });
    }
  })
  .post(studentChecker, async (req, res) => {
    try {
      const {
        roll,
        password,
        name,
        dob,
        sex,
        address,
        imageLink,
        classroom,
        phone,
      } = req.body;

      const studentData = {
        roll: roll,
        name: name,
        password: password,
        dob: dob,
        sex: sex,
        phone: phone,
        classroom: { connect: { id: classroom } },
      };
      if (imageLink) {
        studentData.imageLink = imageLink;
      }
      if (address) {
        studentData.address = address;
      }
      await prisma.student.create({ data: studentData });
      return res.status(200).json({ message: "Student Create Successfully" });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error: error });
    }
  });
module.exports = router;
