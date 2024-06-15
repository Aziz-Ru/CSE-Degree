// External import
const express = require("express");

// internal import
const prisma = require("../prisma/script");
const { courseChecker } = require("../middlewares/courseChecker");

const router = express.Router();

router
  .route("")
  .get(async (req, res) => {
    try {
      const courses = await prisma.course.findMany();
      return res.status(200).json({ data: courses });
    } catch (error) {
      return res
        .status(404)
        .json({ error: error.message, message: "NotFound" });
    }
  })
  .post(courseChecker, async (req, res) => {
    try {
      const { id, name, classRoom } = req.body;
      const courseData = {
        id: id,
        name: name,
        class: { connect: { name: classRoom } },
      };
      if (req.body.credit) {
        courseData.credit = req.body.credit;
      }
      if (req.body.totalMarks) {
        courseData.totalMarks = req.body.totalMarks;
      }

      const courses = await prisma.course.create({ data: courseData });
      return res.status(200).json({ message: "Course Create Successfully" });
    } catch (error) {
      return res
        .status(404)
        .json({ error: error.message, message: "NotFound" });
    }
  });

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const course = await prisma.course.findFirst({ where: { id: id } });
      return res.status(200).json({ data: course });
    } catch (error) {
      return res
        .status(404)
        .json({ error: error.message, message: "Not found" });
    }
  })
  .put(courseChecker, async (req, res) => {
    try {
      const { id } = req.params;
      const { name, classRoom } = req.body;

      const courseData = {
        id: id,
        name: name,
        class: { connect: { name: classRoom } },
      };
      if (req.body.credit) {
        courseData.credit = req.body.credit;
      }
      if (req.body.totalMarks) {
        courseData.totalMarks = req.body.totalMarks;
      }

      await prisma.course.update({ where: { id: id }, data: courseData });
      return res.status(200).json({ message: "Update Successfully" });
    } catch (error) {
      console.log(error.meta.cause);
      return res.status(404).json({ error: error.message, data: "Not Found" });
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.course.delete({ where: { id: id } });
      return res.status(200).json({ message: "Delete Successfully" });
    } catch (error) {
      return res
        .status(200)
        .json({ message: "Failed to delete", error: error.meta.cause });
    }
  });

module.exports = router;
