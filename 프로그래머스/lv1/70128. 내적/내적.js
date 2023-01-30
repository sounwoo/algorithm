function solution(a, b) {
    const answer = a.reduce((acc,cur,i)=>{
       return acc + (cur * b[i])
    },0)
    return answer
    
//     var answer = 0;
    
//     for(let i = 0; i < a.length; i++){ 
//         answer += a[i]*b[i];
//     }
//     return answer;
}