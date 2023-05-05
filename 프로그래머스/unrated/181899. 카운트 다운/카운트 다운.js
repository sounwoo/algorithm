function solution(start, end) {
    // const result = [];
    // for(let i = start ; i >= end ; i-- ){
    //     result.push(i)
    // }
    // return result
    
    return new Array(start - end + 1).fill(start).map((el,i)=> el - i)
}