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
