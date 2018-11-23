const jsonfile = require('jsonfile')
const fileName = '../cache/collected_items.json';
const path = require('path');
const file = path.join(__dirname, fileName)
const scheduler = require('../lib/scheduler')
const dailyCollector = require('../lib/dailyCollector')
const db = require('../db/db');

/**
 * start crawler
 */
// dailyCollector.init()
//     .then(result=> {
//         let totalCount = result['totalCount'];
//         console.log('totalCount=>', totalCount);
//
//         dailyCollector.run(totalCount)
//     }).catch(err => {
//         console.log('err=>', err)
// })

/**
 * insert mongodb
 **/
// let OliveYoungService = require('../db/service');
// jsonfile.readFile(file)
//     .then((items) => {
//         db.connectDB()
//             .then(() => {
//                 OliveYoungService.insertBulk(items)
//                     .then(() =>{
//                         db.close()
//                     })
//             }).catch((err) => {
//             console.error('err=>', err)
//         });
//     });

/**
 * scheduler test
 **/
// scheduler.SaleItemCrawlerJob(100)
scheduler.DailyJob();
// dailyCollector.init()
//     .then(result=> {
//
//         let totalCount = result['totalCount'];
//         console.log('totalCount=>', totalCount);
//
//         scheduler.SaleItemCrawlerJob(totalCount)
//
//     }).catch(err => {
//         console.log('err=>', err)
// })
