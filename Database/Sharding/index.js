const express = require("express");
const postgres = require("postgres");
const app = express();

const db1 = postgres({
  hostname: "localhost",
  port: 5432,
  password: "postgres",
  username: "postgres",
  database: "postgres",
});

const db2 = postgres({
  hostname: "localhost",
  port: 5433,
  password: "postgres",
  username: "postgres",
  database: "postgres",
});
const db3 = postgres({
  hostname: "localhost",
  port: 5434,
  password: "postgres",
  username: "postgres",
  database: "postgres",
});

app.get("/", async (req, res) => {
  const rows = await db1`SELECT * FROM url_table`;
  const row2 = await db2`SELECT * FROM url_table`;
  const row3 = await db3`SELECT * FROM url_table`;
  console.log(rows, row2, row3);
  res.send("Hi Postgres");
});

app.listen(3000, () => {
  console.log("Server is running");
});
