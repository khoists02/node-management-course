import { Request, Response } from "express";
import { UserModel } from "../models/users";
import HttpStatus from "http-status-codes";
import AuthenticationService from "../services/Authentication.service";
import bcrypt from "bcrypt";

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const user: UserModel = req.body;

      const findUser = await AuthenticationService.getUserByUserName(user.name);

      if (!findUser) {
        res.status(HttpStatus.NOT_FOUND).send({ data: findUser });
      }

      const isMatchPass = await bcrypt.compare(
        user.password,
        findUser.password
      );
      if (!isMatchPass)
        res.status(HttpStatus.BAD_REQUEST).send({
          data: {
            error: "Password is wrong!!",
          },
        });
      const token = await AuthenticationService.getToken(findUser);
      res.status(HttpStatus.OK).send({ token });
    } catch (error) {
      // res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error });
    }
  }

  async logout(req: Request, res: Response) {
    req.user = undefined;
    res.status(HttpStatus.ACCEPTED).send("OK");
  }
}

export default new AuthController();
