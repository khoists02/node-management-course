import jwt from "jsonwebtoken";
import { UserModel } from "../models/users";
import User from "../dto/users.dto";
import AuthenticationError from "../errors/AuthenticationError";
import { ERROR } from "../helpers/errors";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
class AuthenticationService {
  async getUserByUserName(username: string) {
    return await User.findOne({ where: { name: username } });
  }

  async getToken(user: UserModel) {
    try {
      const payload = JSON.stringify(user);
      const token = await jwt.sign(payload, JWT_SECRET_KEY);
      return token;
    } catch (error) {
      throw new AuthenticationError(ERROR.ERROR_INVALID_JWT);
    }
  }

  async verifyToken(token: string) {
    const user = await jwt.verify(token, JWT_SECRET_KEY);
    return user as UserModel;
  }
}

export default new AuthenticationService();
