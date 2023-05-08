function solution(arr, n) {
    return arr.map((el,i) => {
        if(arr.length % 2 === 1){
            if(i % 2 === 0){
                return el + n
            }
        }else{
            if(i % 2 === 1){
                return el + n    
            }
        }
        return el
    })
}