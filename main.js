/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-02-16 00:36:39
 * @modify date 2019-02-16 00:36:39
 * @desc [main.js]
 */

(async () => {
    const { Worker } = require("worker_threads")
    const { WORKER_THREADS_NUMBER } = require('./config')
    for (let i = 0; i < WORKER_THREADS_NUMBER; i++) {
        
        const worker = new Worker(`${__dirname}/consume.js`)
        // worker.on('message', message => {
        //     console.log(message)
        // })
        // worker.on('error', error => {
        //     console.log(error.message)
        // })
        // worker.on('exit', code => {
        //     console.log(`done code is ${code}`)
        // })
    }
})();
