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
    prefix: "/comment"
});
// 获取一个评论
router.post("/:id", (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const offset = parseInt(ctx.query.offset) || 0;
    const count = parseInt(ctx.query.count) || 10;
    const query = (err, db) => __awaiter(this, void 0, void 0, function* () {
        if (err) {
            return null;
        }
        // 评论
        const data = yield db
            .collection("comments")
            .find({ _id: ctx.params.id, parent_id: { $exists: false } })
            .sort({ id: -1 })
            .limit(count)
            .skip(offset)
            .toArray();
        // 总数
        const total = yield db
            .collection("comments")
            .find({ parent_id: { $exists: false } })
            .count();
        // 评论
        let ids = [];
        data.forEach(item => {
            ids.push(item.id);
        });
        const sub = yield db
            .collection("commets")
            .find({ _id: ctx.params.id, parent_id: { $in: ids } })
            .toArray();
        return { data, sub, total };
    });
    const r = yield db_1.default(query);
    if (r) {
        ctx.body = { code: 0, data: r };
    }
    else {
        ctx.body = { code: -1, msg: '获取数据失败' };
    }
}));
exports.default = router;
