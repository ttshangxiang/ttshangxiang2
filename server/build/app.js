"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 程序入口
const Koa = require("koa");
const router_1 = require("./router");
const app = new Koa();
// app.use(serve(path.join(__dirname, '../../dist'))); //静态文件目录
app.use(router_1.default.routes());
app.use(router_1.default.allowedMethods());
// app.use(async ctx => {
//     ctx.type = 'html';
//     ctx.body = fs.createReadStream(path.join(__dirname, '../../dist/index.html'));
// });
app.listen(3000);
