import { Router } from "express";
import AuthController from "../controllers/Auth.Controller";
import { authenticate } from "../middleware/authentication.middleware";
const router = Router();
router.get(
  "/authenticatedUser",
  authenticate,
  AuthController.authenticatedUser
);
router.post("/auth/login", AuthController.login);
router.post("/auth/logout", authenticate, AuthController.logout);
router.post("/auth/register", AuthController.register);

export default router;
