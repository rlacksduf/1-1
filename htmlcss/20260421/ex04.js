const ret = require('./ex02')
const readline = require("readline");
const fs = require('fs');

const test = fs.readFileSync('ex01.js','utf-8');
console.log(test);


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let dic = {
    boy:'소년',
    girl:'소녀',
    friend:'친구',
};


rl.question("찾을 단어를 입력하세요 : ", function (key) {
    let word = key;
    console.log(dic[word]);

    rl.close(); //종료 위해 close
});