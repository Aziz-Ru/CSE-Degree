const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({ errorFormat: "pretty" });
// use `prisma` in your application to read and write data in your DB

async function main() {
  await prisma.test.deleteMany();
  //   const test = await prisma.test.create({ data: { name: "test" } });
  //   console.log(test);
  const fTest = await prisma.test.findMany();
  console.log(fTest);
}
main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

module.exports = prisma;
