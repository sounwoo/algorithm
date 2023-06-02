function solution(arr, intervals) {
    let result = [];
    intervals.forEach((el) => result.push(arr.slice(el[0], el[1] +1)))
    
    return result[0].concat(result[1])
}