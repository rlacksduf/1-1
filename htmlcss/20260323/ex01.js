//var   변수선언 재선언 되기 때문에 사용하지 않는다 
// let 변경가능 변수 선언
// const 변경 불가능한 변수선언 (오브제그형 만 변경 가능)

var a = 10;
var a = 20;

console.log(a);

const d = {
    a:10, b:20, c:function(kk){
        console.log(`kk = ${kk}`);
        console.log('cc');
         return 10;
    }
};

console.log(d);
console.log(d.a);
console.log(d.b);
console.log(d.c());

d.c(d.a);

