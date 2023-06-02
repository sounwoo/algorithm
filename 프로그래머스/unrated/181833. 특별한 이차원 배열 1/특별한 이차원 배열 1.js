function solution(n) {
    
    return Array.from(Array(n), () => Array(n).fill(0)).map((el,i) =>{
        el[i] = 1
        return el
    })
    // return Array(n).fill([]).map((el,i) =>{
    //     let leng = 0;
    //     el = []
    //     while(leng < n){
    //         el.length === i ? el.push(1) : el.push(0)
    //         leng++
    //     }
    //     return el
    // })
}