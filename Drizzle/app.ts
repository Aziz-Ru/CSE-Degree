import mysql from "mysql2/promise";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "*aziz121#",
  database: "prismadb",
});

const pool = mysql.createPool(db);

async function connectToDB():Promise<mysql.PoolConnection> {
    
}