import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./drizzle/schema.js",
  dialect: "mysql",
  dbCredentials: {
    host: "localhost",
    user: "root",
    password: "*aziz121#",
    database: "drizzle",
  },
});
