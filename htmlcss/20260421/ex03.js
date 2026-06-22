const unit = {
    attack : function(weapon){
        return `${weapon}으로 공격한다`;
    }
}


// console.log(unit.0); 에러
console.log(unit['0']); //가능
console.log(unit.attack('칼'));

console.log(unit.attack('총총총'))

console.log(unit.name);
//대괄호 표기법
console.log(unit['name']);