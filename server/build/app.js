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
const fs = require("fs");
const path = require("path");
const serve = require("koa-static");
const app = new Koa();
app.use(serve(path.join(__dirname, '../../dist'))); //静态文件目录
app.use((ctx) => __awaiter(this, void 0, void 0, function* () {
    ctx.type = 'html';
    ctx.body = fs.createReadStream(path.join(__dirname, '../../dist/index.html'));
}));
app.listen(3000);
console.log('启动个屁了');
