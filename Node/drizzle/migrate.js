const dotenv = require("dotenv");
const { migrate } = require("drizzle-orm/mysql2/migrator");

dotenv.config();

async function main() {
  try {
    const client = mysql.createConnection(process.env.DATABASE_URL);
    const db = drizzle(client, { schema, mode: "default" });
    await migrate(db, {
      migrationsFolder: "./migrations",
    });
    console.log("Migration Complted");
    await client.end();
  } catch (error) {
    console.log(error);
  }
}

main();
