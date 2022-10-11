import { Request, Router } from "express";
import AuthController from "../controllers/Auth.Controller";
import { authenticate } from "../middleware/authentication.middleware";
import cors from "cors";

const allowlist = ["http://example1.com", "http://example2.com"];
const corsOptionsDelegate = (req: Request, callback: Function): any => {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

const router = Router();
router.get(
  "/authenticatedUser",
  authenticate,
  cors(corsOptionsDelegate),
  AuthController.authenticatedUser
);
router.post("/auth/login", AuthController.login);
router.post(
  "/auth/logout",
  authenticate,
  cors(corsOptionsDelegate),
  AuthController.logout
);
router.post("/auth/register", AuthController.register);
router.delete("/auth/delete", authenticate, AuthController.deleteUser);
router.put(
  "/auth/updateRoles",
  authenticate,
  AuthController.updateRolesForUser
);
export default router;
