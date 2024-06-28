const sequelize = require("sequelize");
require("dotenv").config();
const db = new sequelize(process.env.DATABASE_URL, { dialect: "mysql" });

async function main() {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
main();

module.exports = db;
