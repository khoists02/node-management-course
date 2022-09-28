import { Request, Response, NextFunction } from "express";
import SettingService from "../services/Setting.service";
import HttpStatus from "http-status-codes";

class SettingController {
  async GetSetting(req: Request, res: Response): Promise<void> {
    try {
      const checkValidDomain = await SettingService.checkValidDomain(
        req.headers.host
      );
      if (checkValidDomain) {
        const data = await SettingService.getAllSetting();
        res.status(HttpStatus.OK).send({ data });
      }
      res.status(HttpStatus.NOT_FOUND).send({ text: "Error !!!" });
    } catch (error) {}
  }
}

export default new SettingController();
