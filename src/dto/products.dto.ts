import {
  PrimaryKey,
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
  Unique,
} from "sequelize-typescript";

type ProductAttribute = {
  id: string;
  name: string;
};

@Table({ tableName: "products", timestamps: true })
export default class Product extends Model<ProductAttribute> {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.UUID)
  public id: string;

  @Unique(true)
  @AllowNull(false)
  @Column(DataType.STRING)
  public name: string;
}
