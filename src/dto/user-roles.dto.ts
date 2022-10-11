import { v4 as uuidv4 } from "uuid";
import {
  PrimaryKey,
  DataType,
  Model,
  Table,
  AllowNull,
  Default,
  ForeignKey,
  Column,
} from "sequelize-typescript";
import Roles from "./roles.dto";
import User from "./users.dto";

type UsersRolesAttribute = {
  id?: string;
  user_id?: string;
  role_id?: string;
};

@Table({ tableName: "user_roles", timestamps: false })
export default class UserRoles extends Model<UsersRolesAttribute> {
  @PrimaryKey
  @AllowNull(false)
  @Default(uuidv4())
  @Column(DataType.UUID)
  public id!: string;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  public user_id!: string;

  @ForeignKey(() => Roles)
  @Column(DataType.UUID)
  public role_id!: string;
}
