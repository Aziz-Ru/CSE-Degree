const { drizzle } = require("drizzle-orm/mysql2");
const mysql = require("mysql2/promise");
const schema = require("./schema");

const connection = mysql.createConnection(process.env.DATABASE_URL);

const db = drizzle(connection, { schema });

module.exports = { connection, db };
