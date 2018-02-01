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
const Router = require("koa-router");
const db_1 = require("./db");
const moment = require("moment");
const router = new Router({
    prefix: '/api'
});
router.get('/article', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const query = (err, db) => __awaiter(this, void 0, void 0, function* () {
        if (err) {
            return '错误';
        }
        let r = yield db.collection('article').find().toArray();
        return r;
    });
    ctx.body = yield db_1.default(query);
}));
router.get('/visited', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const query = (err, db) => __awaiter(this, void 0, void 0, function* () {
        if (err) {
            return '错误';
        }
        let r = yield db.collection('visited').find().toArray();
        return r;
    });
    ctx.body = yield db_1.default(query);
}));
router.get('/xiaoqingjiao', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const query = (err, db) => __awaiter(this, void 0, void 0, function* () {
        if (err) {
            return '错误';
        }
        let r = yield db.collection('xiaoqingjiao').find().toArray();
        return r;
    });
    ctx.body = yield db_1.default(query);
}));
router.get('/visit', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    console.log(ctx.headers);
    const ip = ctx.headers['X-Real-IP'];
    const { pathname, renderer } = ctx.query;
    const uid = ctx.cookies.get('uid');
    const insert = (err, db) => __awaiter(this, void 0, void 0, function* () {
        if (err) {
            return '错误';
        }
        let r = yield db.collection('visited').insert(Object.assign({ ip, pathname, renderer, uid }, now()));
        return r.result;
    });
    ctx.body = yield db_1.default(insert);
}));
function now() {
    const create_date = moment().format('YYYY-MM-DD HH:mm:ss');
    const update_date = create_date;
    return { create_date, update_date };
}
exports.default = router;
