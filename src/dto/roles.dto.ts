import { v4 as uuidv4 } from "uuid";
import {
  PrimaryKey,
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
  Unique,
  BelongsToMany,
  Default,
} from "sequelize-typescript";

type RolesAttribute = {
  id: string;
  name: string;
};

@Table({ tableName: "roles", timestamps: false })
export default class Roles extends Model<RolesAttribute> {
  @PrimaryKey
  @Default(uuidv4())
  @Column(DataType.UUID)
  public id: string;

  @Unique(true)
  @AllowNull(false)
  @Column(DataType.STRING)
  public name: string;
}
