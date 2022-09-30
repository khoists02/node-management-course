import { Request, Response } from "express";
import { ArticleRequest } from "../models/article";
import { UserModel, UserResponse } from "../models/users";
import ArticleSerivce from "../services/Product/Article.serivce";

class ArticlesController {
  async createArticle(req: Request, res: Response) {
    try {
      const body: ArticleRequest = req.body;

      const data = await ArticleSerivce.postArticle(
        body,
        // @ts-ignore
        req.user as UserResponse
      );
      res.status(200).send(data);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default new ArticlesController();
