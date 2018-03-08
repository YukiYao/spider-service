/**
 * 文件下载
 * Created by Yao Yundong on 2018-1-15.
 */
let fs = require('fs')
let Request = require('request')

const downloadFile = async function (fileUrl) {
    let urlSplits = fileUrl.split('/')
    let fileName = urlSplits[urlSplits.length - 1]
    if (!fs.existsSync('./temp')) {
        fs.mkdirSync('./temp')
    }
    let path = './temp/' + fileName
    var stream = fs.createWriteStream(path)
    return new Promise(function (resolve, reject) {
        Request(fileUrl).pipe(stream).on('close', function (response) {
            return resolve(path)
        })
    })
}
module.exports = {
    downloadFile
}