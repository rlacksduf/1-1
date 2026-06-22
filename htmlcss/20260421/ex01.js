class AA{
    constructor() {
        console.log('생성자')
    }
}

const aa = new AA();

let dic = new Object();

dic.boy = "소년";

dic.girl = "소녀"
dic.friend = "친구"
dic.money = 10000

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);
console.log(dic.money);

// 딕 오브젝트 안에 속성은 money 속성값은 10000
//추가해서 출력해주세요