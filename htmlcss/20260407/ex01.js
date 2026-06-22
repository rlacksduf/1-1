//선언부
//arguments 가 자동으로 새엇왿ㅁ
// 매개변수를 보내면 생성

function doA() {
    console.log(arguments)
    console.log("A");
    return 10;
}

function doB(a,b = 20) { //기본 값 설정
    console.log(`a = ${a} b=${b}`)
}

//호출부부 매개변수 차이
const ret = doA(10);
console.log(ret);

doB(10);