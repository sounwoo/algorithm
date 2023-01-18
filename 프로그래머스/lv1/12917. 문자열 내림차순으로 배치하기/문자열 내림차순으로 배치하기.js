function solution(s) {
//     const answer = [];
    
//     for(let i = 0; i<s.length; i++){
//        answer.push(s[i])
//     }
    
//     answer.sort((a,b) => {return a > b ? -1 : 1}  )
//     return answer.join('');
    
    var answer = s.split('');
    return answer.sort((a,b) => {return a > b ? -1 : 1}).join('');
}