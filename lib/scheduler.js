var scheduler = require('node-schedule');
var dailyCollector = require('./dailyCollector');
var mqttPublish = require('./mqttPublish');

function DailyJob() {
    console.log('start DailyJob!')
    var rule = {hour: 0, minute: 35}
    // var rule = '*/1 * * * *'; //1 min
    // var rule = '*/5 * * * * *'; //5 sec

    var job = scheduler.scheduleJob(rule, function (time) {
        console.log('answer time =>', time);

        dailyCollector.init()
            .then(result => {

                let totalCount = result['totalCount']
                console.log('totalCount=>', totalCount);
                SaleItemCrawlerJob(totalCount)

            }).catch(err => {
            console.log('crawler job err=>', err);
            job.cancel();
        })

    });
}

function SaleItemCrawlerJob(totalCount) {

    let rule = '*/1 * * * *'; //1 min
    // var rule = '*/30 * * * * *'; //30 sec
    let startIdx = 1;
    let rowsPerPage = 48;
    let pageLength = Math.ceil(totalCount / rowsPerPage);

    console.log('pageLength=>', pageLength);

    let job = scheduler.scheduleJob(rule, function (time) {
        console.log('answer startIdx =>', startIdx);
        console.log('answer time =>', time);

        if (startIdx > pageLength) {
            console.log('finish job!');
            job.cancel();

            /**
             * TODO: cacheFile에서 product_ref_code가
             * db에 있으면 update,
             * 없으면 insert 기능 구현 */
        } else {
            dailyCollector.run(totalCount, startIdx, rowsPerPage)
            startIdx ++;
        }
    });
}

exports.DailyJob = DailyJob;
exports.SaleItemCrawlerJob = SaleItemCrawlerJob;

