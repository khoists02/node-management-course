import { NextFunction, Request, Response } from "express";
import { ERROR } from "../helpers/errors";
import AuthenticationError from "../errors/AuthenticationError";
import AuthenticationService from "../services/Auth/Authentication.service";
import { UserModel, UserResponse } from "../models/users";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearerToken: string | undefined = req.headers.authorization;
  if (!bearerToken) throw new AuthenticationError(ERROR.ERROR_UNAUTHORISED);
  const token = bearerToken.replace("Bearer ", "");
  if (!token) throw new AuthenticationError(ERROR.ERROR_INVALID_TOKEN);
  try {
    const user: UserModel = await AuthenticationService.verifyToken(token);
    if (user) {
      const userResponse: UserResponse = {
        username: user.name,
        email: user.email,
        id: user.id,
      };
      // @ts-ignore
      req.user = userResponse;
    }
  } catch (error) {
    return next(error);
  }
  return next();
};
