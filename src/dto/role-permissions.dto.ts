import { v4 as uuidv4 } from "uuid";
import {
  PrimaryKey,
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
  ForeignKey,
  Default,
} from "sequelize-typescript";
import Permissions from "./permission.dto";
import Roles from "./roles.dto";

type RolePermissionsAttributes = {
  id: string;
  role_id: string;
  user_id: string;
};

@Table({ tableName: "role_permissions", timestamps: false })
export default class RolesPermissions extends Model<RolePermissionsAttributes> {
  @PrimaryKey
  @AllowNull(false)
  @Default(uuidv4())
  @Column(DataType.UUID)
  public id: string;

  @ForeignKey(() => Roles)
  @AllowNull(false)
  @Column(DataType.UUID)
  public role_id: string;

  @ForeignKey(() => Permissions)
  @AllowNull(false)
  @Column(DataType.UUID)
  public user_id: string;
}
