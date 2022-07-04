// Connect to Sequelize & Require Dotenv
const Sequelize = require('sequelize');
require('dotenv').config();

// Connect using login credentials from .env file
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;