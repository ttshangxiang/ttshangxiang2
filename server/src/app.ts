// 程序入口
import * as Koa from 'koa';
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello xixihaha';
});

app.listen(3000);
console.log('启动个屁了');