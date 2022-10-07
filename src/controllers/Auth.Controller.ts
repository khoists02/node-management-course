import { Request, Response } from "express";
import { UserModel } from "../models/users";
import HttpStatus from "http-status-codes";
import AuthenticationService from "../services/Auth/Authentication.service";
import bcrypt from "bcrypt";
import ApplicationError from "../errors/ApplicationError";
import { ERROR } from "../helpers/errors";

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const body = req.body as UserModel;
      const data = await AuthenticationService.register(body);
      res.send({ data });
    } catch (error) {
      res.send({ error });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const user: UserModel = req.body;

      if (!user)
        throw new ApplicationError(ERROR.ERROR_ACCOUNT_KEYCLOAK_INVALID_GRANT);

      const findUser = await AuthenticationService.getUserByUserName(
        user.name as string
      );

      if (!findUser) throw new ApplicationError(ERROR.ERROR_USER_NAME_EXIST);

      const isMatchPass = await bcrypt.compare(
        user.password as string,
        findUser?.password as string
      );

      if (!isMatchPass)
        res.status(HttpStatus.BAD_REQUEST).send({
          data: {
            error: "Password is wrong!!",
          },
        });
      const token = await AuthenticationService.getToken(findUser as UserModel);
      res.status(HttpStatus.OK).send({ token });
    } catch (error) {
      res.send({ error });
    }
  }

  async logout(req: Request, res: Response) {
    // @ts-ignore
    req.user = undefined;
    res.status(HttpStatus.ACCEPTED).send("OK");
  }

  async authenticatedUser(req: Request, res: Response) {
    try {
      const user = await AuthenticationService.authenticatedUser(req);
      if (!user)
        throw new ApplicationError(
          ERROR.ERROR_ACCOUNT_KEYCLOAK_CONNECTION_REFUSED
        );
      res.status(HttpStatus.OK).send({
        id: user.id,
        username: user.name,
        email: user.email,
        roles: user.roles.map((x) => x.name),
      });
    } catch (error) {
      res.status(500).send({ error });
    }
  }
}

export default new AuthController();
