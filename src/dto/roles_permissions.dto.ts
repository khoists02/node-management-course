import {
  PrimaryKey,
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
  ForeignKey,
  BeforeSave,
} from "sequelize-typescript";
import Permissions from "./permission.dto";
import Roles from "./roles.dto";
import { v4 as uuidv4 } from "uuid";

type RolesPermissionsAttribute = {
  id: string;
  roleId: string;
  permissionId: string;
};

@Table({ tableName: "roles_permissions", timestamps: false })
export default class RolesPermissions extends Model<RolesPermissionsAttribute> {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.UUID)
  public id: string;

  @ForeignKey(() => Roles)
  @AllowNull(false)
  @Column(DataType.UUID)
  public roleId: string;

  @ForeignKey(() => Permissions)
  @AllowNull(false)
  @Column(DataType.UUID)
  public permissionId: string;

  @BeforeSave
  static generateUUID(item: RolesPermissions) {
    item.id = uuidv4();
  }
}
