const superagent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');

const reptileUrl = 'https://bj.lianjia.com/ershoufang/changping/';

superagent.get(reptileUrl).end(function (err, res) {
    // 抛错拦截
    if(err){
        return console.error(err.stack);
        // throw new Error(err);
    }
    // console.log('内容');
    // console.log(res.text);
    let $ = cheerio.load(res.text);
    let data = [];

    $('.sellListContent li').each(function(i, elem) {
        // 拿到当前li标签下所有的内容，开始干活了
        let _this = $(elem);
        data.push({
            title: _this.find('flood').text()
        })
    });

    
    // 写入数据, 文件不存在会自动创建
    fs.writeFile(__dirname + 'article.json', JSON.stringify({
        status: 0,
        data: data
    }), function (err) {
        if (err) throw err;
        console.log('写入完成');
    });
});