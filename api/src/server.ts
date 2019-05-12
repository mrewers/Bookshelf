import * as Koa from 'koa';
import * as Router from 'koa-router';
import { postgresDB } from './database/postgres';

const koa = new Koa();
const router = new Router();

const api = async () => {
  // Initialize DB
  await postgresDB();

  //Respond with a message to all client requests
  koa.use( async ctx => {
    ctx.body = "Connected!";
  });
  
  // Run the API on port 3000
  koa.listen(3000);
  console.log('Server running on port 3000');
}

api();