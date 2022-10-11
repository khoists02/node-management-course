import { Request, Response } from "express";
import { UserModel } from "../models/users";
import HttpStatus from "http-status-codes";
import AuthenticationService from "../services/Auth/Authentication.service";
import bcrypt from "bcrypt";
import ApplicationError from "../errors/ApplicationError";
import { ERROR } from "../helpers/errors";
import AuthenticationError from "../errors/AuthenticationError";

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const body = req.body as UserModel;
      const data = await AuthenticationService.register(body);
      res.status(201).send({ data });
    } catch (error) {
      res.status(500).send({ error });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const user: UserModel = req.body;

      if (!user)
        throw new ApplicationError(ERROR.ERROR_ACCOUNT_KEYCLOAK_INVALID_GRANT);

      const findUser = await AuthenticationService.getUserByUserName(
        user.username as string
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

      const token = await AuthenticationService.getToken({
        id: findUser.id,
        name: findUser.name,
        username: findUser.username,
      } as UserModel);
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
      res.status(200).send({
        id: user.id,
        name: user.name,
        username: user.name,
        email: user.email,
      });
    } catch (error) {
      res.send({ error });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      await AuthenticationService.deleteUser(req.params.id);
      res.status(200).send("OK");
    } catch (error) {
      res.status(500).send({ error });
    }
  }

  async updateRolesForUser(req: Request, res: Response) {
    try {
      await AuthenticationService.updateRolesForUser(
        req.body.userId,
        req.body.roleIds as string[]
      );
      res.status(200).send("OK");
    } catch (error) {
      res.status(500).send({ error });
    }
  }
}

export default new AuthController();
