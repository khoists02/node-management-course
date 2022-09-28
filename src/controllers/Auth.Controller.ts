import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel, UserResponse } from "../models/users";
import HttpStatus from "http-status-codes";
import AuthenticationService from "../services/Authentication.service";

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const user: UserModel = req.body;
      const findUser = await AuthenticationService.getUserByUserName(user.name);
      if (findUser) {
        const token = jwt.sign(findUser, "220793");
        res.status(HttpStatus.OK).send({ token });
      }
      res.status(HttpStatus.NOT_FOUND).send({ data: findUser });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error });
    }
  }
}

export default new AuthController();
