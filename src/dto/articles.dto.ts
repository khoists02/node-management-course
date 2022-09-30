import {
  PrimaryKey,
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
} from "sequelize-typescript";

export type ArticleType = "SELL" | "RENT";

type ArticlesAttribute = {
  id: string;
  type: ArticleType;
  articleType: string;
  title: string;
  address: string;
  location: string;
  description: string;
};

@Table({ tableName: "articles", timestamps: false })
export default class Articles extends Model<ArticlesAttribute> {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.UUID)
  public id: string;

  @AllowNull(false)
  @Column(DataType.ENUM("SELL", "RENT"))
  public type: ArticleType;

  @AllowNull(false)
  @Column(DataType.STRING)
  public articleType: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public title: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public address: string;

  @Column(DataType.STRING)
  public location: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  public description: string;
}
