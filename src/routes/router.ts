import { Router as ExpressRouter } from "express";
import SettingRouter from "./Setting.Router";
import AuthRouter from "./Auth.Router";
class Router {
  public init() {
    const router = ExpressRouter();
    router.use("/api/v1/", SettingRouter);
    router.use("/api/v1/", AuthRouter);
    router.use("*", () => {
      throw new Error("Not Found!!!");
    });

    return router;
  }
}

export default new Router();
