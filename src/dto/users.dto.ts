import { v4 as uuidv4 } from "uuid";
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
  Default,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import bcrypt from "bcrypt";
import { hashPassword } from "../helpers/index";
import ApplicationError from "../errors/ApplicationError";
import { ERROR } from "../helpers/errors";

type UserAttribute = {
  id: string;
  name: string;
  username: string;
  password: string;
  passwordcompare: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;
  owner?: boolean;
  enabled?: boolean;
};

@Table({ tableName: "users" })
export class User extends Model<UserAttribute> {
  @PrimaryKey
  @AllowNull(false)
  @Default(uuidv4())
  @Column(DataType.UUID)
  public id: string;

  @Unique(true)
  @AllowNull(false)
  @Column(DataType.STRING)
  public username: string;

  @Unique(true)
  @AllowNull(false)
  @Column(DataType.STRING)
  public name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public password: string;

  @Column(DataType.STRING)
  public passwordcompare: string;

  @AllowNull(true)
  @Validate({ isEmail: true })
  @Column(DataType.STRING)
  public email: string;

  @CreatedAt
  @Column(DataType.DATE)
  public created_at: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  public updated_at: Date;

  @Default(true)
  @Column(DataType.BOOLEAN)
  public owner: Date;

  @Default(true)
  @Column(DataType.BOOLEAN)
  public enabled: Date;

  @BeforeSave
  static async hashPasswordBeforeUpdate(user: User) {
    const passwordHash = await hashPassword(user.password);
    user.password = passwordHash;
  }

  @BeforeSave
  static async comparePassword(user: User) {
    const decryptPassword = await bcrypt.compare(
      user.passwordcompare,
      user.password
    );
    if (!decryptPassword)
      throw new ApplicationError(ERROR.ERROR_USER_PASSWORD_COMPARE_WRONG);

    user.passwordcompare = user.password;
  }
}

export default User;
