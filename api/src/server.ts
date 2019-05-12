import * as Koa from 'koa';
import * as Router from 'koa-router';

const api = new Koa();
const router = new Router();

router.get('/*', async (ctx) => {
  ctx.body = 'Hola World!';
});

api.use(router.routes());

api.listen(3000);

console.log('Server running on port 3000');