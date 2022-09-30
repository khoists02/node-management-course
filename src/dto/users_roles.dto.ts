import {
  PrimaryKey,
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
  ForeignKey,
} from "sequelize-typescript";
import Roles from "./roles.dto";
import User from "./users.dto";

type UsersRolesAttribute = {
  id: string;
  userId: string;
  roleId: string;
};

@Table({ tableName: "users_roles", timestamps: false })
export default class UserRoles extends Model<UsersRolesAttribute> {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.UUID)
  public id: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.UUID)
  public userId: string;

  @ForeignKey(() => Roles)
  @AllowNull(false)
  @Column(DataType.UUID)
  public roleId: string;
}
