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
} from "sequelize-typescript";
import bcrypt from "bcrypt";
import { hashPassword } from "../helpers/index";

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
    if (!decryptPassword) throw new Error("Compare password failed !!!");

    user.passwordCompare = user.password;
  }
}

export default User;
