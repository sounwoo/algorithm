function solution(phone_number) {
    var answer = '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
                // answer.padStart(phone_number.length -4 , "*") + phone_number.slice(-4)
    
    // for(let i =0; i < phone_number.length; i++){
    //     if(i < phone_number.length - 4){
    //         answer +='*'
    //     }else{
    //         answer += phone_number[i]
    //     }
    // }
    
    return answer
}