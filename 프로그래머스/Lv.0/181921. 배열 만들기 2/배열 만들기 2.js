function solution(l, r) {
    const result = []
    for(let i = l; i <= r; i++){
        const temp = i.toString().split('0').join('').split('5').join('')
        if(!temp.length) result.push(i)
    }
    return result.length ? result : [-1]
}