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
exports.default = router;
