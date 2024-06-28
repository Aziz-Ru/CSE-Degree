const {
  int,
  mysqlEnum,
  mysqlTable,
  serial,
  uniqueIndex,
  varchar,
} = require("drizzle-orm/mysql-core");

// declaring enum in database
const countries = mysqlTable("countries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).unique(),
});

module.exports = { countries };
