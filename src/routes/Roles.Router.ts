import { Router } from "express";
import RolesController from "../controllers/Roles.Controller";
import { authenticate } from "../middleware/authentication.middleware";
const router = Router();

router.get("/roles/:roleId", authenticate, RolesController.getRoleById);
router.put("/roles/:roleId", authenticate, RolesController.updateRole);
router.get("/roles", authenticate, RolesController.getRoles);
router.post("/roles", authenticate, RolesController.createRole);

export default router;
