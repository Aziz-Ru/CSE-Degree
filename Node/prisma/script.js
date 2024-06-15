const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({ errorFormat: "pretty" });
// use `prisma` in your application to read and write data in your DB

// async function main() {
//   const findStu = await prisma.student.findFirst({ where: { name: "jabbu" } });
//   const findClass = await prisma.class.findFirst({ where: { name: "six" } });
//   // console.log(findClass);
//   const enroll = await prisma.classEnrollment.create({
//     data: {
//       student: { connect: { id: findStu.id } },
//       class: { connect: { id: findClass.id } },
//     },
//   });
// }
// main()
//   .catch((e) => {
//     console.error(e.message);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

module.exports = prisma;
