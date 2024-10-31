const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({ errorFormat: "pretty" });
// // use `prisma` in your application to read and write data in your DB

async function main() {
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Alice1",
  //       password: "123456",
  //       posts: {
  //         create: {
  //           title: "Hello World",
  //           content: "This is my first post",
  //         },
  //       },
  //     },
  //   });
  const user = await prisma.user.findMany();
  console.log(user);
  await prisma.post.deleteMany();
  const post = await prisma.post.findMany();
  console.log(post);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    // await prisma.$disconnect();
  });

// module.exports = prisma;
