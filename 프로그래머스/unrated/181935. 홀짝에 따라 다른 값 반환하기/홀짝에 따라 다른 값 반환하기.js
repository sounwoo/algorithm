function solution(n) {
    return Array(Math.ceil(n / 2)).fill(1).reduce((acc , _, i) =>{    
        return acc + (n % 2 === 0 ? (2 * (i + 1)) ** 2 : 2 * i + 1)
    }, 0)
    // return Array(n).fill(1).reduce((acc , cur, i) =>{    
    //     if(n % 2 === 0){
    //         if(cur + i % 2 !== 1){
    //             return acc + (cur + i) * (cur + i)
    //         } return acc
    //     }else {
    //         if(cur + i % 2 === 1){
    //             return acc + (cur + i)
    //         } return acc
    //     }
    // }, 0)
}