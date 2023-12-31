function solution(k, score) {
    const temp = []
    const result = []
    
    for(let i = 0 ; i < score.length ; i ++) {
        if(i < k) temp.push(score[i])
        
        if(score[i]>Math.min(...temp)) {
            temp.pop()
            temp.push(score[i])
            temp.sort((a,b) => b-a)
            
        }
        result.push(temp.at(-1))
    }
    return result
}