const arr = ['javascript', 'c++', 'python'];// for of 사용
const obj = {a: '10', b:20}; //object형  for in 사용

for (const item of arr) { //파이썬 레인지 for 구문
    console.log(item);

}

console.log(arr); //배열내용 모두 출력

//forEach 사용        2015 년 추가
console.log('forEach 사용');
arr.forEach(item => {
    console.log(item);
})
//  ====
arr.forEach(function(item) {
    console.log(item);
})