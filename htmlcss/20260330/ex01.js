function aa(){
    let test = 10;
    console.log(test);
}

const bb = ()=>{
    let test = 10
    console.log(test);
}

let num = 0

for (; num < 10; num ++) {
    console.log("test" + num)
    console.log(`test ${num}`); //새로나온 템플릿 문자형 많이씀
}
console.log(`for 구문 끝나고 num = ${num}`);

// console.log(test); 오류 테스트가 함수안에있기때멩

console.log(aa);
aa();

bb();
 