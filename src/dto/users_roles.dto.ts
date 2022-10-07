import { v4 as uuidv4 } from "uuid";
import {
  PrimaryKey,
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
  Default,
  ForeignKey,
  BeforeSave,
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
  @Default(uuidv4())
  @Column(DataType.UUID)
  public id: string;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  public userId: string;

  @ForeignKey(() => Roles)
  @Column(DataType.UUID)
  public roleId: string;

  @BeforeSave
  static async autoGenerateUUID(usersRoles: UserRoles) {
    usersRoles.id = uuidv4();
  }
}
