import { Router } from "express";
import SettingController from "../controllers/Setting.Controller";
const router = Router();

router.get("/setting", SettingController.GetSetting);
export default router;
