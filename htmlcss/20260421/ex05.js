const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdin,
});

rl.question("아자쓰! 무조건 천원, 상품입력?", function(obj) {
    let basket = {
        [obj] : "친구",
    }
    console.log(basket[obj]);

    rl.close();
})