function solution(n) {
    const result = [n]
    
    while(result.slice(-1) > 1){
        const temp = result.slice(-1)
        result.push(temp % 2 === 0 ? temp / 2 : 3 * temp + 1)
        // temp % 2 === 0 ? result.push(temp / 2) : result.push(3 * temp + 1)
    }
    return result
}
