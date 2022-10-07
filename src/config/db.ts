import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";
import UserRoles from "../dto/users_roles.dto";
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

export default sequelizeConnection;
