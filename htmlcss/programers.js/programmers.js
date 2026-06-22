// function solution(n) {
//     return Math.ceil(n/7);
// }
// console.log(solution(15))


// function solution(slice,n) {
//     return Math.ceil(n/slice);
// }

/**
 * Math.floor 내림
 * Math.round 반올림
 * Math.ceil 올림
 */


// function solution(my_string) {
//     return [...new Set(my_string)].join('');
// }

// function solution(money) {
//     // 1. 최대로 마실 수 있는 잔 수 (몫)
//     const count = Math.floor(money / 5500);
//     // 2. 남는 돈 (나머지)
//     const change = money % 5500;
    
//     return [count, change];
// }

// console.log(solution(15000))

// function solution(num_list) {
//     // 얕은 복사([...arr])를 해야 원본 배열이 뒤집히지 않음
//     return [...num_list].reverse();
// }

// console.log(solution([1, 2, 3, 4, 5])); // 출력: [5, 4, 3, 2, 1]

// function solution(numbers) {
//     return numbers.map(num => num * 2)
// }
// console.log(solution([1,2,3]))


// function plus(a,b) {
//     return a+b
// }


n = 3

if (n % 2 == 0) {
    console.log('even');
}else {
    console.log('odd');
}

let a = 7
let b = 1
let c =2

console.log(Math.max(a,b,c));