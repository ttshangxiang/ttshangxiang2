import * as Router from 'koa-router';
import DB from './db';
import * as moment from 'moment';
import * as request from 'request';
import * as https from 'https';

const router = new Router({
    prefix: '/api'
});

router.get('/article', async (ctx, next) => {
    const query = async (err, db) => {
        if (err) {
            return '错误';
        }
        let r = await db.collection('article').find().toArray();
        return r;
    }
    ctx.body = await DB(query);
});

router.get('/visited', async (ctx, next) => {
    const query = async (err, db) => {
        if (err) {
            return '错误';
        }
        let r = await db.collection('visited').find().toArray();
        return r;
    }
    ctx.body = await DB(query);
});

router.get('/xiaoqingjiao', async (ctx, next) => {
    const query = async (err, db) => {
        if (err) {
            return '错误';
        }
        let r = await db.collection('xiaoqingjiao').find().toArray();
        return r;
    }
    ctx.body = await DB(query);
});

router.get('/visit', async (ctx, next) => {
    const ip = ctx.headers['x-real-ip'];
    const { pathname, renderer } = ctx.query;
    const uid = ctx.cookies.get('uid');
    let ipAddress = {};
    if (ip) {
        const queryIp = async (err, db) => {
            if (err) {
                return '';
            }
            let r = await db.collection('ips').find({ ip });
            return r;
        }
        const query = await DB(queryIp);
        if (query && query[0] && query[0].data) {
            ipAddress = query[0].data;
        } else {
            ipAddress = await requestIp(ip);
            await DB(async (err, db) => {
                !err && await db.collection('ips').insert({ip, data: ipAddress})
            });
        }
    }
    const insert = async (err, db) => {
        if (err) {
            return '错误';
        }
        let r = await db.collection('visited').insert({ ip, pathname, renderer, uid, ipAddress, ...now()});
        return r.result;
    }
    ctx.body = await DB(insert)
});

function now () {
    const create_date = moment().format('YYYY-MM-DD HH:mm:ss');
    const update_date = create_date;
    return {create_date, update_date};
}

function requestIp (ip) {
    const options = {
        hostname: 'dm-81.data.aliyun.com',
        port: 443,
        path: `/rest/160601/ip/getIpInfo.json?ip=${ip}`,
        method: 'GET',
        headers: {
            'Authorization': 'APPCODE e1b1da03861f4b4abe6477503d9fdc54'
        },
        agent: false
    };
    return new Promise((resolve, reject) => {
        var req = https.request(options, function (res) {
            console.log(res.statusCode);
            res.on('data', function (d) {
                console.log(d);
                resolve(d);
            });
        });
        req.end();

        req.on('error', function (e) {
            console.error(e);
            resolve('');
        });
    });
}

export default router;
