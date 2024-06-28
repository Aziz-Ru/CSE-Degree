const Sequelize = require("sequelize");

const db = require("../config/database");

const Country = db.define("country", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
});

module.exports = Country;
