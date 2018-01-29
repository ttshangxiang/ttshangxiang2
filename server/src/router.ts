import * as Router from 'koa-router';
import DB from './db';

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

export default router;
