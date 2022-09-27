import { Sequelize } from "sequelize"
const DATABASE_NAME = process.env.DATABASE_NAME;
const PASSWORD = process.env.DATABASE_PASSWORD;
const USER = process.env.DATABASE_USER;
const sequelize = new Sequelize(DATABASE_NAME, USER, PASSWORD, {
    dialect: "mysql",
    host: "db"
  });
  
export { sequelize }