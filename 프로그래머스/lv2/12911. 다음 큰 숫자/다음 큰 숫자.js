function solution(n) {
    const oneLength = [...n.toString(2)].filter((el) => el === "1").length
    
    let temp = 0
    let result = 0
    while(temp !== oneLength){
        n++
        temp = [...n.toString(2)].filter((el) => el === "1").length
        result = n
    }
    return result
    
}