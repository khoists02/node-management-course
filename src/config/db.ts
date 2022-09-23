import { Sequelize } from "sequelize"

const sequelize = new Sequelize('test', 'root', 'Minhkhoi93!@#', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
  });
  
export { sequelize }