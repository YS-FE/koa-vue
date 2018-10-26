const Router = require('koa-router');
const apiRouter = new Router();
const router = new Router();

router.get('/user', (ctx, next) => {
  ctx.status = 200;
  ctx.type = 'application/json';
  ctx.body = {name: 'lisi', age: 10};
});

apiRouter.use('/api', router.routes(), router.allowedMethods());


module.exports = apiRouter;

