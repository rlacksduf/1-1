//단축 프로퍼티티티ㅣ

const id ='아이디';
const pw = '패스워드';

const person = {
    /** id: **/ id, //단축 프로퍼티의 파워어ㅜ워어ㅜㅇ
    /** pw: **/ pw,
    name: '서재민',
    age: 18,
    address:'경상북도 포항시 남구 지곡로 102 #동 ###호(낙원아파트)',
    information: '090211-#######',

}

console.log(person);

for (const key in person) {
    const element = person[key];
    console.log(`key ${key} element ${element}`)
}

