import { createConnection } from 'typeorm';

require('dotenv').config();

export const postgresDB = async () => {
  return await createConnection({
    type     : 'postgres',
    host     : process.env.POSTGRES_HOST,
    port     :  5432,
    username : process.env.POSTGRES_USERNAME,
    password : process.env.POSTGRES_PASSWORD,
    database : process.env.POSTGRES_DB,
    ssl: true,
    logging: ['query', 'error'],
    synchronize: true,
  }).then((connection) => {
    console.log('Database connection established');
  });
};