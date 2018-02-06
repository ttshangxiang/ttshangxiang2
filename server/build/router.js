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
const request = require("request");
const mongodb_1 = require("mongodb");
const router = new Router({
    prefix: '/api'
});
router.get('/article/:id', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const query = (err, db) => __awaiter(this, void 0, void 0, function* () {
        if (err) {
            return { code: 1 };
        }
        var r = yield db.collection('article').findOne({ _id: mongodb_1.ObjectId(ctx.params.id) });
        return {
            code: 0,
            data: r
        };
    });
    const data = yield db_1.default(query);
    if (data.code !== 0) {
        ctx.status = 500;
    }
    ctx.body = data;
}));
router.get('/article', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const type = ctx.query.type;
    let queryObj = {};
    if (type) {
        queryObj = { type: parseInt(type) };
    }
    const query = (err, db) => __awaiter(this, void 0, void 0, function* () {
        if (err) {
            return { code: 1 };
        }
        let r = yield db.collection('article').find(queryObj).toArray();
        return {
            code: 0,
            data: r
        };
    });
    const data = yield db_1.default(query);
    if (data.code !== 0) {
        ctx.status = 500;
    }
    ctx.body = data;
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
    const ip = ctx.headers['x-real-ip'];
    const { pathname, renderer } = ctx.query;
    const uid = ctx.cookies.get('uid');
    let ipAddress = {};
    if (ip) {
        const queryIp = (err, db) => __awaiter(this, void 0, void 0, function* () {
            if (err) {
                return '';
            }
            let r = yield db.collection('ips').findOne({ ip });
            return r;
        });
        const queryIpR = yield db_1.default(queryIp);
        if (queryIpR && queryIpR._id) {
            ipAddress = queryIpR;
        }
        else {
            ipAddress = yield requestIp(ip);
            yield db_1.default((err, db) => __awaiter(this, void 0, void 0, function* () {
                !err && (yield db.collection('ips').insert(Object.assign({}, ipAddress)));
            }));
        }
    }
    const insert = (err, db) => __awaiter(this, void 0, void 0, function* () {
        if (err) {
            return '错误';
        }
        let r = yield db.collection('visited').insert(Object.assign({ ip, pathname, renderer, uid, ipAddress }, now()));
        return r.result;
    });
    ctx.body = yield db_1.default(insert);
}));
function now() {
    const create_date = moment().format('YYYY-MM-DD HH:mm:ss');
    const update_date = create_date;
    return { create_date, update_date };
}
function requestIp(ip) {
    const options = {
        method: 'get',
        url: `https://dm-81.data.aliyun.com/rest/160601/ip/getIpInfo.json?ip=${ip}`,
        rejectUnauthorized: false,
        headers: {
            'Authorization': 'APPCODE e1b1da03861f4b4abe6477503d9fdc54'
        }
    };
    return new Promise((resolve, reject) => {
        request(options, (err, res, body) => {
            if (err) {
                resolve({});
                console.log(err);
                return;
            }
            try {
                const json = JSON.parse(body);
                resolve(json.data);
            }
            catch (error) {
                console.log(error);
                resolve({});
            }
        });
    });
}
exports.default = router;
