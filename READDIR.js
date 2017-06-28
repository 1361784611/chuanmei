let fs = require('fs');
let result = fs.readdirSync('./article');
console.log('已交作业学员作品：');
console.log('规则：https://zhufengpeixun.github.io/chuanmei/article/[中文姓名全拼]');
result.forEach(function (item, index) {
    let res = `https://zhufengpeixun.github.io/chuanmei/article/${item}/`;
    console.log(res);
});
