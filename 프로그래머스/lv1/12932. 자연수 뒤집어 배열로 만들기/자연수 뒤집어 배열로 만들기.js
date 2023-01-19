function solution(n) {
    let answer = String(n).split("").reverse().map((num) =>{
        return Number(num)
    });
    
    
    // let answer = [];
    // n = n.toString().split('')
    // for(let i = n.length - 1 ; i >= 0; i--){
    //     answer.push(Number(n[i]))
    // }
    
    
    
    return answer
}