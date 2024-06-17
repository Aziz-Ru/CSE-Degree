// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//   dialect: "mysql",
//   schema: "./src/db/schema",
//   out: "./.drizzle/migrations",
//   driver: "mysql2",
//   dbCredentials: {
//     url: process.env.DATABASE_URL as string,
//   },
// });

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql", // Replace with your actual dialect (e.g., "postgres")
  schema: "./src/db/schema", // Path to your schema files
  out: "./.drizzle/migrations", // Output directory for migration files
  // driver: "mysql2", // Optional: Use a specific driver if needed
  dbCredentials: {
    url: process.env.DATABASE_URL as string, // Connection URL from environment variable
  },
});

