const Download = require('./core/download')
const Promise = require('bluebird')
const cheerio = require('cheerio');
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