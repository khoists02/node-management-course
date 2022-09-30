import { Router } from "express";
import PermissionController from "../controllers/Permission.Controller";
import { authenticate } from "../middleware/authentication.middleware";
const router = Router();

router.get("/permissions", authenticate, PermissionController.GetAll);

export default router;
