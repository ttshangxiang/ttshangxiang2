"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// 程序入口
const Koa = require("koa");
const session = require("koa-session");
const router_1 = require("./router");
const app = new Koa();
// 错误处理
app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield next();
    }
    catch (err) {
        console.log(err);
        ctx.body = { status: 500, msg: err.message, stack: err.stack.split('\n') };
    }
}));
// 处理body
var bodyParser = require('koa-bodyparser');
app.use(bodyParser());
// app.use(serve(path.join(__dirname, '../../dist'))); //静态文件目录
// session
app.keys = ['jhqnb'];
const CONFIG = {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,
};
app.use(session(CONFIG, app));
app.use(router_1.default.routes());
app.use(router_1.default.allowedMethods());
// app.use(async ctx => {
//     ctx.type = 'html';
//     ctx.body = fs.createReadStream(path.join(__dirname, '../../dist/index.html'));
// });
app.listen(3000);
