import { Router as ExpressRouter } from "express";
import SettingRouter from "./Setting.Router";

class Router {
  public init() {
    const router = ExpressRouter();
    router.use("/api/v1/", SettingRouter);

    router.use("*", () => {
      throw new Error("Not Found!!!");
    });

    return router;
  }
}

export default new Router();
