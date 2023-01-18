function solution(array, commands) {
    const answer = commands.map((el) =>{
       const result = array.slice(el[0] - 1, el[1]).sort((a,b) => {return a - b});
        return result[el[2] - 1]
    })
    return answer
    
    
//     var answer = [];
//     let arr;
//     for (let idx = 0; idx < commands.length; idx++) {
//         const i = commands[idx][0]
//         const j = commands[idx][1]
//         const k = commands[idx][2]
//         arr = array.slice(i - 1, j).sort(); // .slice(i,j) i = i 부터 j앞까지(index기준)
//         answer.push(arr[k - 1]);
//     }

//     return answer;
}