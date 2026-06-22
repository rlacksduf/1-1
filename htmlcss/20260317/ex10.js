// %%는  and다  둘중에 하나가 false여도 false임
// ||는 or 둘중 하나만 true 여도 true
// ex= 10<11 !ex 는  false

var a = 10;
var f = false && ++a;
console.log(f);
console.log(a);