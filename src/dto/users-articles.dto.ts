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
import User from "./users.dto";

type UsersArticlesAttribute = {
  id: string;
  userId: string;
  articleId: string;
};

@Table({ tableName: "users-articles", timestamps: false })
export default class UsersArticles extends Model<UsersArticlesAttribute> {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.UUID)
  public id: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.UUID)
  public userId: string;

  @ForeignKey(() => Articles)
  @AllowNull(false)
  @Column(DataType.UUID)
  public articleId: string;
}
