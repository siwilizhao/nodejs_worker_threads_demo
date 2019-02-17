/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-02-17 18:09:58
 * @modify date 2019-02-17 18:09:58
 * @desc [redis.js]
 */

let instance = null
const { REDIS_PORT, REDIS_HOST } = require('./config')
class Redis {
    constructor() {
        if (!instance) {
            const ioredis = require('ioredis')
            this.redis = new ioredis(REDIS_PORT, REDIS_HOST)
            instance = this
        }
        return instance
    }
}
module.exports = new Redis()