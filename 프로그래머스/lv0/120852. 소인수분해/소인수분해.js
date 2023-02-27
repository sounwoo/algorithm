function solution(n) {
    let num = 2, result = []
    
    while(n !== 1){
        if(Number.isInteger(n/num)){
            result.push(num)
            n = n/num
        }else{
            num++
        }
    }
    return [...new Set(result)]
}