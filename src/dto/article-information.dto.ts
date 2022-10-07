import {
  PrimaryKey,
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
  ForeignKey,
} from "sequelize-typescript";
import Articles from "./articles.dto";

export type ArticleInformationJuridical = "WAITING" | "VALID" | "HDMB";

type ArticleInformationAttribute = {
  id: string;
  area: string;
  price: string;
  juridicalType: ArticleInformationJuridical;
  rooms: string;
  position: string;
  note: string;
  articleId: string;
};

@Table({ tableName: "article-information", timestamps: false })
class ArticleInformation extends Model<ArticleInformationAttribute> {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.UUID)
  public id: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public area: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public price: string;

  @AllowNull(false)
  @Column(DataType.ENUM("WAITING", "VALID", "HDMB"))
  public juridicalType: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public rooms: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public position: string;

  @Column(DataType.STRING)
  public note: string;

  @ForeignKey(() => Articles)
  @Column(DataType.UUID)
  articleId: string;
}

export default ArticleInformation;
