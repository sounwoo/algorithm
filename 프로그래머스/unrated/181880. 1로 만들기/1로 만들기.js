function solution(num_list) {
    let count = 0 
    num_list.forEach((el) =>{
        let temp = el
        while(temp > 1){
            temp = temp % 2 === 0 ? temp / 2 : (temp - 1) / 2
            count++
        }
    })
    return count
}