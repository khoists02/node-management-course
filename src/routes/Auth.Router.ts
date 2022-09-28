import { Router } from "express";
import AuthController from "../controllers/Auth.Controller";
const router = Router();

router.post("/auth/login", AuthController.login);
export default router;
