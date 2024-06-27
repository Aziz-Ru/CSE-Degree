const mysql = require("mysql2/promise");
const { drizzle } = require("drizzle-orm/mysql2");
const dotenv = require("dotenv");
const schema = require("./schema");
dotenv.config();

const mysqlClient = mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(mysqlClient, { schema, mode: "default" });

async function main() {
  try {
    // const connection1 = await mysql.createConnection(process.env.DATABASE_URL);
    // const id = 2;
    // const [rows, fields] = await connection1.execute(
    //   `SELECT * FROM Student WHERE ROLL=${id}`
    // );
    // console.log(rows);
    // await connection.end();
  } catch (error) {
    console.log(error);
  }
}

main();
