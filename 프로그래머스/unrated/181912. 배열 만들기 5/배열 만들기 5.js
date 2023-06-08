function solution(intStrs, k, s, l) {
    const answer = []
    intStrs.forEach((el) =>{
        const temp = el.slice(s,s+l)
        if(temp > k) answer.push(Number(temp))
    })
    return answer
}