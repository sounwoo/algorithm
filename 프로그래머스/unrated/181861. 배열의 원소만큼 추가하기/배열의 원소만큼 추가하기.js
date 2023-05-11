function solution(arr) {
    // let result = '';
    // arr.forEach((el) => result += String(el).repeat(el))
    // return [...result].map((el) => +el)
    
    
    const X = [];
    arr.forEach((el)=> X.push(...Array(el).fill(el)))
    return X
}