function doA({a,b,c}) {
    // console.log(obj)
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);

}
// 객체 분해
// 배열 분해
const [a,b,c] = [1,2,3];
doA({a:'aa', b: 'bb', c : 'cc'})

const obj = { a: 'aa', b: 'bb', c: 'cc'}
doA(obj);