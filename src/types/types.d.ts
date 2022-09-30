import { DataTypeAbstract, ModelAttributeColumnOptions } from "sequelize";
import * as express from "express";
import { UserResponse } from "../models/users";

declare global {
  type SequelizeAttributes<T extends { [key: string]: any }> = {
    [P in keyof T]: string | DataTypeAbstract | ModelAttributeColumnOptions;
  };
}

declare global {
  namespace Express {
    interface Request {
      user?: UserResponse;
    }
  }
}
