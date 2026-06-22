// function plus(a,b) {
//     return a+b;
// }
// console.log(plus(10,2));

// const plus = (a,b) => {
//     console.log('a+b 할 계획')
//     return a + b;
// }
// console.log(plus(10,2));

// const plus = a => a + 10;
// console.log(plus(10));

// const plus = () => 1010 + 10;
// console.log(plus())

// const [a,b,...rest] = ['C#','javascript','python','react','C++'];

// console.log(a);
// console.log(b);
// console.log(rest.length);
// console.log(rest[0]);

// const arr1 = ["a", "b", "c",];
// const arr2 = ['d', 'e', 'f',];

// console.log(...arr1,...arr2);


// const ss = new Set();

// ss.add('a')
// ss.add('a')
// ss.add('b')
// ss.add('c')
// console.log(ss);
// console.log(...ss);
// console.log(ss.size);


// const ss1 = new Set('we are the world');
// console.log(ss1);
// console.log([...ss1]);
// console.log([...ss1].join('')); // 배열(리스트)일때 문자열로변경

const user = {
    id:'아이디',
    pw:'패스워드',
    name: "서재민",
    age: 18
}
const id = user.id;
const pw = user.pw
const name = user.name;
const age = user.age;

console.log(user.id);
console.log(user.pw);
console.log(user.name);
console.log(user.age);
