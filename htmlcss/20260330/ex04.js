const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('팩토리얼 구하기',(data)=>{
    console.log(data);
    let value = 1;
    for (let num = 1; num <= data; num++) {

        value = value * num
    }
    console.log(`value = ${value}`);
    rl.close();
})