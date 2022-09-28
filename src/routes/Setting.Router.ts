import { Router } from "express";
import SettingController from "../controllers/Setting.Controller";
import { authenticate } from "../middleware/authentication.middleware";
const router = Router();

router.get("/setting", authenticate, SettingController.GetSetting);
export default router;
