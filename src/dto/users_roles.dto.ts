import {
  PrimaryKey,
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
  Default,
  ForeignKey,
} from "sequelize-typescript";
import Roles from "./roles.dto";
import User from "./users.dto";

type UsersRolesAttribute = {
  id: string;
  userId: string;
  roleId: string;
};

@Table({ tableName: "users-roles", timestamps: false })
export default class UserRoles extends Model<UsersRolesAttribute> {
  @PrimaryKey
  @AllowNull(false)
  @Default(DataType.UUID)
  @Column(DataType.UUID)
  public id: string;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  public userId: string;

  @ForeignKey(() => Roles)
  @Column(DataType.UUID)
  public roleId: string;
}
