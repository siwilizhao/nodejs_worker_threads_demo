/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-02-16 14:20:08
 * @modify date 2019-02-16 14:20:08
 * @desc [consume.js]
 */
(async () => {
    const { redis } = require('./redis')
    const { WORKER_THREADS_LIST } = require('./config')
    const start = Date.now()

    while (true) {
        const jsonStr = await redis.rpop(WORKER_THREADS_LIST)
        if (!jsonStr) {
            break
        }
        const jsonObj = JSON.parse(jsonStr)
        console.log(`code is : ${jsonObj.code}`)
    }
    console.log(`used: ${Math.ceil((Date.now() - start )/1000)} s`)
    await redis.quit()
})()