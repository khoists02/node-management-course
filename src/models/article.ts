import { ArticleInformationJuridical } from "../dto/article-information.dto";
import { ArticleType } from "../dto/articles.dto";

export interface ArticleInformationRequest {
  note?: string;
  area?: string;
  price?: string;
  juridicalType?: ArticleInformationJuridical;
  rooms?: string;
  position?: string;
}

export interface ArticleRequest {
  title?: string;
  type?: ArticleType;
  articleType?: string;
  address?: string;
  location?: string;
  description?: string;
  articleInformation?: ArticleInformationRequest;
}
