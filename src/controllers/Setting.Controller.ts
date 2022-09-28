import { Request, Response, NextFunction } from "express";
import SettingService from "../services/Setting.service";

class SettingController {
  async GetSetting(req: Request, res: Response): Promise<void> {
    try {
      const checkValidDomain = await SettingService.checkValidDomain(
        req.headers.host
      );
      if (checkValidDomain) {
        const data = await SettingService.getAllSetting();
        res.send({ data });
      }
      res.send({ text: "Error !!!" });
    } catch (error) {}
  }
}

export default new SettingController();
