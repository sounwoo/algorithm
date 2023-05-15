function solution(n) {
    return Array(n).fill(1).reduce((acc , cur, i) =>{
        
        if(n % 2 === 0){
            if(cur + i % 2 !== 1){
                return acc + (cur + i) * (cur + i)
            } return acc
        }else {
            if(cur + i % 2 === 1){
                return acc + (cur + i)
            } return acc
        }
    }, 0)
}