// 程序入口
import * as Koa from 'koa';
import * as fs from 'fs';
import * as path from 'path';
import * as serve from 'koa-static';
import router from './router';
const app = new Koa();

// app.use(serve(path.join(__dirname, '../../dist'))); //静态文件目录

app.use(router.routes());
app.use(router.allowedMethods());

// app.use(async ctx => {
//     ctx.type = 'html';
//     ctx.body = fs.createReadStream(path.join(__dirname, '../../dist/index.html'));
// });

app.listen(3000);