import { Dialect } from "sequelize";
import { DataType, Sequelize } from "sequelize-typescript";
import {
  User,
  UsersRoles,
  UsersArticles,
  RolesPermissions,
  Roles,
  Permissions,
  Articles,
  ArticleInformation,
} from "../dto/index";
const path = require("path");

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER as Dialect;
const dbPassword = process.env.DB_PASSWORD;
const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: dbDriver as Dialect,
  port: parseInt(dbHost, 10) || 5432,
});

sequelizeConnection.addModels([
  User,
  Roles,
  UsersRoles,
  UsersArticles,
  RolesPermissions,
  Permissions,
  Articles,
  ArticleInformation,
]);

UsersRoles.belongsTo(Roles, {
  as: "Roles",
  foreignKey: "roleId",
  keyType: DataType.UUID,
});
UsersRoles.belongsTo(User, {
  as: "User",
  foreignKey: "userId",
  keyType: DataType.UUID,
});

export default sequelizeConnection;
