import { Router } from "express";
import ArticlesController from "../controllers/Articles.Controller";
import { authenticate } from "../middleware/authentication.middleware";
const router = Router();

router.post("/articles", authenticate, ArticlesController.createArticle);
export default router;
