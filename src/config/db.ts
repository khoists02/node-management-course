import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";
const path = require("path");

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER as Dialect;
const dbPassword = process.env.DB_PASSWORD;
const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: dbDriver as Dialect,
  port: 5439,
  models: [`${path.join(__dirname, "../", "dto")}` + "\\*.dto.js"],
});

export default sequelizeConnection;
