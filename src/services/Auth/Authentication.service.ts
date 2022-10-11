import jwt, { Secret } from "jsonwebtoken";
import { UserModel, UserResponse } from "../../models/users";
import User from "../../dto/users.dto";
import AuthenticationError from "../../errors/AuthenticationError";
import { ERROR } from "../../helpers/errors";
import { Request } from "express";
import ApplicationError from "../../errors/ApplicationError";
import UserRoles from "../../dto/user-roles.dto";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

class AuthenticationService {
  async register(user: UserModel) {
    try {
      const data = {
        name: user.name as string,
        username: user.username as string,
        password: user.password as string,
        passwordcompare: user.passwordcompare as string,
        email: user.email as string,
        // roles: [
        //   {
        //     name: "admin",
        //   },
        // ],
      } as any;
      const response = await User.create(data);
      // const newUser = await User.create(data, {
      //   include: [
      //     {
      //       model: Roles,
      //       as: "roles",
      //     },
      //   ],
      // });
      return {
        user: response,
      };
    } catch (error) {
      console.log({ error });
      throw new ApplicationError(error);
    }
  }

  async getUserByUserName(username: string) {
    return await User.findOne({ where: { username, enabled: true } });
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
    if (!user) throw new AuthenticationError(ERROR.ERROR_UNAUTHORISED);
    const ourUser = await User.findByPk(user.id);
    return ourUser;
  }

  async deleteUser(id: string) {
    try {
      await User.destroy({ where: { id } });
    } catch (error) {
      throw new AuthenticationError(error);
    }
  }

  async updateRolesForUser(userId: string, roleIds?: string[]) {
    try {
      const updatedUser = await User.findByPk(userId);
      if (!updatedUser)
        throw new AuthenticationError(ERROR.ERROR_USER_NAME_EXIST);
      if (!roleIds || roleIds.length === 0)
        throw new AuthenticationError(ERROR.ERROR_USER_NAME_EXIST);
      const userRolesIds = roleIds.map((roleId) => {
        return {
          role_id: roleId,
          user_id: userId,
        };
      });
      userRolesIds.forEach(async (userRole) => {
        await UserRoles.create(userRole);
      });
    } catch (error) {
      throw new AuthenticationError(error);
    }
  }
}

export default new AuthenticationService();
