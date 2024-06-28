const prisma = require("../prisma/script");

const studentChecker = async (req, res, next) => {
  const {
    roll,
    name,
    password,
    dob,
    sex,
    address,
    imageLink,
    classroom,
    phone,
  } = req.body; // Destructuring the request body
  console.log(classroom);
  const CLASS = await prisma.classroom.findUnique({
    where: { name: classroom, date: "2024-06-16" },
  });

  if (!CLASS) {
    return res.status(404).json({ message: "Classroom not found" });
  }
  req.body.classroom = CLASS.id;

  if (roll && password && name && dob && sex && classroom && phone) {
    return next();
  }

  next("Error: Missing required fields");
};

module.exports = studentChecker;
