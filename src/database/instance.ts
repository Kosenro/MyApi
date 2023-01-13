import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

// connection à la database
const sequelize = new Sequelize(
  process.env.DBNAME ?? 'craftcomputer',
  process.env.DBUSERNAME ?? 'root',
  process.env.DBPASSWORD ?? 'root',
  {
    host: process.env.DBHOST,
    dialect: 'mysql',
  },
);

export default sequelize;
