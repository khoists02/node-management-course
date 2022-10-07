import {
  PrimaryKey,
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
  Unique,
  BelongsToMany,
} from "sequelize-typescript";
import User from "./users.dto";
import UserRoles from "./users_roles.dto";

type RolesAttribute = {
  id: string;
  name: string;
};

@Table({ tableName: "roles", timestamps: false })
export default class Roles extends Model<RolesAttribute> {
  @PrimaryKey
  @Column(DataType.UUID)
  public id: string;

  @Unique(true)
  @AllowNull(false)
  @Column(DataType.STRING)
  public name: string;

  @BelongsToMany(() => User, () => UserRoles)
  public users!: User[];
}
