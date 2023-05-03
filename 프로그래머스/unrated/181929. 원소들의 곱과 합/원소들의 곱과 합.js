function solution(num_list) {
    let qqq = num_list[0]
    let aaa = 0
    num_list.forEach((el) => aaa += el)
    num_list.forEach((el, i) => {
        i++
        if(num_list.length > i) {
            qqq = qqq * num_list[i]
        }
    })
    return qqq < aaa*aaa ? 1:0
}