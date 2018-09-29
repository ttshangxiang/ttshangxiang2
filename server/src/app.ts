// 程序入口
import * as Koa from 'koa';
import * as fs from 'fs';
import * as path from 'path';
import * as serve from 'koa-static';
import * as session from 'koa-session';
import router from './router';
const app = new Koa();

// 错误处理
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err);
    ctx.body = {status: 500, msg: err.message, stack: err.stack.split('\n')};
  }
});

// 处理body
var bodyParser = require('koa-bodyparser');
app.use(bodyParser());


// app.use(serve(path.join(__dirname, '../../dist'))); //静态文件目录
app.use(serve(path.join(__dirname, '../../kumovideo'))); //静态文件目录

// session
app.keys = ['jhqnb'];
const CONFIG = {
   key: 'ttsx:session',   //cookie key (default is koa:sess)
   maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
   overwrite: true,  //是否可以overwrite    (默认default true)
   httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
   signed: true,   //签名默认true
   rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
   renew: false,  //(boolean) renew session when session is nearly expired,
};
app.use(session(CONFIG, app));

app.use(router.routes());
app.use(router.allowedMethods());

// app.use(async ctx => {
//     ctx.type = 'html';
//     ctx.body = fs.createReadStream(path.join(__dirname, '../../dist/index.html'));
// });

app.listen(3000);