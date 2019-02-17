/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-02-16 14:18:38
 * @modify date 2019-02-16 14:18:38
 * @desc [build.js]
 */

(async () => {
    const { redis } = require('./redis')
    const { WORKER_THREADS_LIST_LENGTH }  = require('./config')
    while (true) {
        const code = Math.floor(Math.random() * Math.pow(10, 16))

        const res = await redis.lpush('WORKER_THREADS_LIST', JSON.stringify({created: Date.now(), code : code}))
        if (res > WORKER_THREADS_LIST_LENGTH) {
            console.log(`build done`)
            break
        }
    }
    await redis.quit()
})()