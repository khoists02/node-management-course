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
      const data = {
        name: user.name as string,
        password: user.password as string,
        passwordCompare: user.passwordCompare as string,
        email: user.email as string,
        roles: [
          {
            name: "admin",
          },
        ],
      } as any;
      const newUser = await User.create(data, {
        include: [
          {
            model: Roles,
            as: "roles",
          },
        ],
      });
      return {
        user: newUser,
      };
    } catch (error) {
      console.log({ error });
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
    const ourUser = await User.findOne({
      where: { id: user.id },
      include: Roles,
    });
    return ourUser;
  }

  // async deleteUser(req: Request) {
  //   // @ts-ignore
  //   const user = req.user as UserResponse;

  //   if (!user) throw new AuthenticationError(ERROR.ERROR_TENANT_USER_NOT_FOUND);
  //   const ourUser = await User.destroy({
  //     where: { id: user.id },
  //     include: Roles,
  //   });
  //   return ourUser;
  // }
}

export default new AuthenticationService();
