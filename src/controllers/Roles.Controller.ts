import { Request, Response } from "express";
import RolesService from "../services/Auth/Roles.Service";
import { RoleRequest } from "../models/roles";

class RolesController {
  async getRoleById(req: Request, res: Response) {
    const data = await RolesService.getRole(req.params["roleId"]);
    res.status(200).send({ data });
  }

  async getRoles(req: Request, res: Response) {
    const data = await RolesService.getRoles();
    res.status(200).send({ data });
  }

  async createRole(req: Request, res: Response) {
    try {
      const body: RoleRequest = req.body;
      const data = await RolesService.createRole(body);
      res.status(201).send({ data });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async updateRole(req: Request, res: Response) {
    try {
      const body: RoleRequest = req.body;
      const data = await RolesService.updateRole(req.params["roleId"], body);
      res.status(200).send({ data });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default new RolesController();
