import { Router as ExpressRouter } from "express";
import SettingRouter from "./Setting.Router";
import AuthRouter from "./Auth.Router";
import RolesRouter from "./Roles.Router";
import PermissionsRouter from "./Permissions.Router";
import ArticleRouter from "./Article.Router";

class Router {
  public init() {
    const router = ExpressRouter();
    router.use("/api/v1/", SettingRouter);
    router.use("/api/v1/", AuthRouter);
    router.use("/api/v1/", RolesRouter);
    router.use("/api/v1/", PermissionsRouter);
    router.use("/api/v1/", ArticleRouter);
    router.use("*", () => {
      throw new Error("Not Found!!!");
    });

    return router;
  }
}

export default new Router();
