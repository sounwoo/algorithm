function solution(arr) {
    let idx = 0
    while(true) {
        const temp = arr.map(a => {
            if(a >= 50 && a%2 === 0) return a/2
            if(a < 50 && a%2 === 1) return a*2+1
            return a
        })
        const isAllSame = arr.every((a, i) => a === temp[i])
        if(isAllSame) break
        idx++
        arr = temp
    }
    
    return idx
}