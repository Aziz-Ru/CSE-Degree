## Drizzle

_npm i drizzle-orm_

- Install mysql driver
  _npm i mysql_

- _npm i --save-dev drizzle-kit_

`
{
"dialect": "mysql",
"schema": "./db/schema.js",
"out": "./db/migrations",
"driver": "mysql"
}

`

```
const { defineConfig } = require("drizzle-kit");
const dotenv = require("dotenv");
dotenv.config();
module.exports = defineConfig({
  dialect: "mysql",
  // "mysql" | "sqlite" | "postgresql"
  schema: "./db/schema.js",
  out: "./db/migrations",
  driver: "mysql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
```

## Mysql Connect

```
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

```
