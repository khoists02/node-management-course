import {
  PrimaryKey,
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
  Unique,
} from "sequelize-typescript";

type PermissionsAttribute = {
  id: string;
  name: string;
  code: string;
  key: string;
};

@Table({ tableName: "permissions", timestamps: false })
export default class Permissions extends Model<PermissionsAttribute> {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.UUID)
  public id: string;

  @Unique(true)
  @AllowNull(false)
  @Column(DataType.STRING)
  public name: string;

  @Unique(true)
  @AllowNull(false)
  @Column(DataType.STRING)
  public code: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public key: string;
}
