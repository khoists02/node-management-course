import { v4 as uuidv4 } from "uuid";
import ArticleInformation, {
  ArticleInformationJuridical,
} from "../../dto/article-information.dto";
import Articles, { ArticleType } from "../../dto/articles.dto";
import UsersArticles from "../../dto/users-articles.dto";
import ApplicationError from "../../errors/ApplicationError";
import AuthenticationError from "../../errors/AuthenticationError";
import { ERROR } from "../../helpers/errors";
import { ArticleRequest } from "../../models/article";
import { UserResponse } from "../../models/users";
import AuthenticationService from "../Auth/Authentication.service";

class ArticleService {
  async postArticle(model: ArticleRequest, user: UserResponse) {
    try {
      const findUser = await AuthenticationService.getUserByUserName(
        user.username as string
      );
      if (!findUser)
        throw new ApplicationError(ERROR.ERROR_NOT_MATCH_CURRENT_PASSWORD);

      const article = await Articles.create({
        id: uuidv4(),
        title: model.title as string,
        description: model.description as string,
        address: model.address as string,
        articleType: model.articleType as string,
        type: model.type as ArticleType,
        location: model.location as string,
      });

      if (!article)
        throw new ApplicationError(ERROR.ERROR_ACCOUNT_KEYCLOAK_INVALID_GRANT);
      await UsersArticles.create({
        id: uuidv4(),
        articleId: article.id,
        userId: user.id as string,
      });

      const articleInformation = await ArticleInformation.create({
        id: uuidv4(),
        articleId: article.id as string,
        note: model.articleInformation?.note as string,
        area: model.articleInformation?.area as string,
        price: model.articleInformation?.price as string,
        juridicalType: model.articleInformation
          ?.juridicalType as ArticleInformationJuridical,
        rooms: model.articleInformation?.rooms as string,
        position: model.articleInformation?.position as string,
      }); // should be create the mapper with model attributes and model request mapping => Model response mapping !!!

      return {
        data: {
          article,
          articleInformation,
        },
      };
    } catch (error) {
      throw new AuthenticationError(error);
    }
  }

  async getArticleDetail(id: string) {
    try {
      return await Articles.findByPk(id);
    } catch (error) {
      throw new ApplicationError(error);
    }
  }

  async getInformationByArticleId(id: string) {
    try {
      return await ArticleInformation.findOne({ where: { articleId: id } });
    } catch (error) {
      throw new ApplicationError(error);
    }
  }
}

export default new ArticleService();
