import {
  PrimaryKey,
  Column,
  DataType,
  Model,
  Table,
  AllowNull,
  Unique,
} from "sequelize-typescript";

type SettingsAttribute = {
  id: string;
  name: string;
};

@Table({ tableName: "settings", timestamps: false })
export default class Settings extends Model<SettingsAttribute> {
  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.UUID)
  public id: string;

  @Unique(true)
  @AllowNull(false)
  @Column(DataType.STRING)
  public setting: string;
}
