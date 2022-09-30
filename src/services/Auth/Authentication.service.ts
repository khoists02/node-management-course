import { v4 as uuidv4 } from "uuid";
import jwt, { Secret } from "jsonwebtoken";
import { UserModel, UserResponse } from "../../models/users";
import User from "../../dto/users.dto";
import AuthenticationError from "../../errors/AuthenticationError";
import { ERROR } from "../../helpers/errors";
import { Request } from "express";
import ApplicationError from "../../errors/ApplicationError";
import Roles from "../../dto/roles.dto";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

class AuthenticationService {
  async register(user: UserModel) {
    try {
      return await User.create({
        id: uuidv4(),
        name: user.name as string,
        password: user.password as string,
        passwordCompare: user.passwordCompare as string,
        email: user.email as string,
      });
    } catch (error) {
      throw new ApplicationError(error);
    }
  }

  async getUserByUserName(username: string) {
    return await User.findOne({ where: { name: username } });
  }

  async getToken(user?: UserModel) {
    try {
      const payload = JSON.stringify(user);
      const token = await jwt.sign(payload, JWT_SECRET_KEY as string as Secret);
      return token;
    } catch (error) {
      throw new AuthenticationError(ERROR.ERROR_INVALID_JWT);
    }
  }

  async verifyToken(token: string) {
    const user = await jwt.verify(token, JWT_SECRET_KEY as string as Secret);
    return user as UserModel;
  }

  async authenticatedUser(req: Request) {
    // @ts-ignore
    const user = req.user as UserResponse;

    if (!user) throw new AuthenticationError(ERROR.ERROR_TENANT_USER_NOT_FOUND);

    return await User.findByPk(user.id);
  }
}

export default new AuthenticationService();
