import { Router } from "express";
import AuthController from "../controllers/Auth.Controller";
const router = Router();

router.post("/auth/login", AuthController.login);
router.post("/auth/logout", AuthController.logout);
export default router;
