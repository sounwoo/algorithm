function solution(num_list, n) {
    let temp = 0
    return num_list.filter((el, i) => {
        if (i === 0) {
            temp ++
            return el
        }
        if(temp === n ){
            temp = 1
            return el
        } else temp++
    })
}