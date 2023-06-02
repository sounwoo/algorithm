function solution(n) {
    
    return Array(n).fill([]).map((el,i) =>{
        let leng = 0;
        el = []
        while(leng < n){
            el.length === i ? el.push(1) : el.push(0)
            leng++
        }
        return el
    })
}