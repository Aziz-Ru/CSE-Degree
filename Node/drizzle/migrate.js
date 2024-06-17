const dotenv = require("dotenv");
const { migrate } = require("drizzle-orm/mysql2/migrator");
const { connection, db } = require("./db");
dotenv.config();

async function main() {
  try {
    await migrate(db, {
      migrationsFolder: "./migrations",
    });
    console.log("Migration Complted");
    await connection.end();
  } catch (error) {
    console.log(error);
  }
}

main();
