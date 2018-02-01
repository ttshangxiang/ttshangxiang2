import * as Router from 'koa-router';
import DB from './db';
import * as moment from 'moment';

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
    console.log(ctx.headers)
    const ip = ctx.headers['X-Real-IP'];
    const { pathname, renderer } = ctx.query;
    const uid = ctx.cookies.get('uid');
    const insert = async (err, db) => {
        if (err) {
            return '错误';
        }
        let r = await db.collection('visited').insert({ ip, pathname, renderer, uid, ...now()});
        return r.result;
    }
    ctx.body = await DB(insert)
});

function now () {
    const create_date = moment().format('YYYY-MM-DD HH:mm:ss');
    const update_date = create_date;
    return {create_date, update_date};
}

export default router;
