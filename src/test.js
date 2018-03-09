const Download = require('./core/download')
const Promise = require('bluebird')
const cheerio = require('cheerio');
const superagent = require('superagent');

// const download = async function (fileUrl) {
//     let info = await Download.downloadFile(fileUrl)
//     console.log(info)
//     return info
// }
// let list = [
//     'https://www.baidu.com/img/fnjpf_9645ee052dbf7848fd9c2aba67035b4b.png',
//     'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/8601a18b87d6277f4419372b24381f30e924fc9e.jpg'
// ]
// Promise.map(list, (url) => {
//     return download(url)
// })

const reptileUrl = "http://www.jianshu.com/";
superagent.get(reptileUrl).end(function (err, res) {
    // 抛错拦截
    if (err) {
        throw Error(err);
    }
    /**
    * res.text 包含未解析前的响应内容
    * 我们通过cheerio的load方法解析整个文档，就是html页面所有内容，可以通过console.log($.html());在控制台查看
    */
    let $ = cheerio.load(res.text);
    $('#list-container .note-list li').each(function (i, elem) {
        // 拿到当前li标签下所有的内容，开始干活了
       let temp =  $(elem).find('.wrap-img img').attr('src')
        console.log(temp)
    });
});