function solution(start, end) {
//     const result = [];
//     for(let i = start ; i >= end ; i-- ){
//         result.push(i)
//     }
//     return result
    return new Array(start - end + 1).fill(0).map((el,i)=>{
        return el[i] = start - i
    })
}
