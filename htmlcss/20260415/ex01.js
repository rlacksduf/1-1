function solution(arr1, delete_list) {
    let answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        const arr_item = arr1[i];
        let needDelete = false;
        for(let j = 0; j<delete_list.length; j++){
            const delete_item = delete_list[j];
            if(arr_item == delete_item){
                needDelete = true;
                // console.log(`arr_item ${arr_item} delete_item ${delete_item}`)
                break;
            }

        }
        if(!needDelete)
            answer.push(arr_item);
    }
    
    
    return answer;
}

solution([293, 1000, 395, 678, 94],[94, 777, 104, 1000, 1, 12])