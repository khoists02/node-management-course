import { Request, Response } from "express";
import PermissionService from "../services/Auth/Permission.service";

class PermissionsController {
  async GetAll(req: Request, res: Response) {
    try {
      const content = await PermissionService.GetAll();
      res.send({ content });
    } catch (error) {
      res.send({ error });
    }
  }
}

export default new PermissionsController();
