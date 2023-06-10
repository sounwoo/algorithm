function solution(num_list) {
    let count = 0 
    num_list.forEach((el) =>{
        while(el > 1){
            el = el % 2 === 0 ? el / 2 : (el - 1) / 2
            count++
        }
    })
    return count
}