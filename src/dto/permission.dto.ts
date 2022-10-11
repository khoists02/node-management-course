import { v4 as uuidv4 } from "uuid";
import {
  PrimaryKey,
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
  Unique,
  Default,
} from "sequelize-typescript";

type PermissionsAttribute = {
  id: string;
  name: string;
  code: string;
  groupKey: string;
};

@Table({ tableName: "permissions", timestamps: false })
export default class Permissions extends Model<PermissionsAttribute> {
  @PrimaryKey
  @AllowNull(false)
  @Default(uuidv4())
  @Column(DataType.UUID)
  public id: string;

  @Unique(true)
  @AllowNull(false)
  @Column(DataType.STRING)
  public code: string;

  @Column(DataType.STRING)
  public description: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public groupKey: string;
}
