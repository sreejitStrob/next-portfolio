import { Sequelize } from "sequelize";
import mysql2 from 'mysql2'; 

// const dbName = process.env.DB_NAME as string;
// const dbUser = process.env.DB_USER as string;
// const dbPass = process.env.DB_PASS as string;
// const dbHost = process.env.DB_HOST || 'localhost';
// const dbDialect = process.env.DB_DIALECT as any;

// export const sequelize = new Sequelize(dbName, dbUser, dbPass, {
//   host: dbHost,
//   dialect: 'mysql',
// });
export const sequelize = new Sequelize('the_server_side', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: mysql2,
  port: 3306
});