function cc(test){
    console.log(test);
}

//함수를 호출할떄 
// 매개변수로 기본자료형 타입(10, 'str', ture)
//매개 변수로 함수 보낼수있다
//매개변수로 오브젝트형도 보낼수있다

const obj = {
    aa:10,
    bb: 20,
    cc: function () { }
}
cc(obj);