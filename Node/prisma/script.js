const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

async function main() {
  //   const test = await prisma.test.create({
  //     data: { name: "Valvardee", age: 26, city: "Uruguye" },
  //   });
  //
  const test = await prisma.test.findMany({
    where: { age: { gte: 25 } }, // age less than 30

    distinct: ["city"],
    orderBy: { name: "asc" }, //orderBy Ascending Order
    select: { name: true, age: true, id: true }, //that is only return name field
  });
  console.log(test);
}
// main()
//   .catch((e) => {
//     console.error(e.message);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

module.exports = prisma;
