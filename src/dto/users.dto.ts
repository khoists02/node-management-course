import {
  PrimaryKey,
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
  Unique,
  BeforeSave,
  Validate,
  BelongsToMany,
} from "sequelize-typescript";
import bcrypt from "bcrypt";
import { hashPassword } from "../helpers/index";
import ApplicationError from "../errors/ApplicationError";
import { ERROR } from "../helpers/errors";
import Roles from "./roles.dto";
import UserRoles from "./users_roles.dto";

type UserAttribute = {
  id: string;
  name: string;
  password: string;
  passwordCompare: string;
  email: string;
};

@Table({ tableName: "users" })
export class User extends Model<UserAttribute> {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.UUID)
  public id: string;

  @Unique(true)
  @AllowNull(false)
  @Column(DataType.STRING)
  public name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public password: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public passwordCompare: string;

  @AllowNull(true)
  @Validate({ isEmail: true })
  @Column(DataType.STRING)
  public email: string;

  @BelongsToMany(() => Roles, () => UserRoles)
  public roles!: Roles[];

  @BeforeSave
  static async hashPasswordBeforeUpdate(user: User) {
    const passwordHash = await hashPassword(user.password);
    user.password = passwordHash;
  }

  @BeforeSave
  static async comparePassword(user: User) {
    const decryptPassword = await bcrypt.compare(
      user.passwordCompare,
      user.password
    );
    if (!decryptPassword)
      throw new ApplicationError(ERROR.ERROR_USER_PASSWORD_COMPARE_WRONG);

    user.passwordCompare = user.password;
  }
}

export default User;
