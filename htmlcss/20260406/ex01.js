// const obj = {adadadad} 객체형
// const answer = [adadad] 객체형 배열

function solution(st, en){
    console.log(`st = ${st} en = ${en}`)
    const answer = [];

    // 배열 함수인 psuh pop slice 함수 쌉가능

    for(let i = st; i <= en; i++) {
        console.log(`i = ${i}`);
        answer.push(i)
    }
    return answer;
}

const result = solution(3,5);
console.log(result);