// 程序入口
import Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello nima';
});

app.listen(3000);
console.log('启动');