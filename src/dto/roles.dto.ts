import {
  PrimaryKey,
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
  Unique,
} from "sequelize-typescript";
type RolesAttribute = {
  id: string;
  name: string;
  userId: string;
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
}
