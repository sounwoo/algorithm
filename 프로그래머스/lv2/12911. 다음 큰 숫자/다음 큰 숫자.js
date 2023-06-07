function solution(n) {
    const oneLength = [...n.toString(2)].filter((el) => el === "1").length
    let temp = 0
    while(n++){
        temp = [...n.toString(2)].filter((el) => el === "1").length
        if(temp === oneLength) return n
    }
    
}