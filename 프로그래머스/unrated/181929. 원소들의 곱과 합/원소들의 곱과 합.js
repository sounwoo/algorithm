function solution(num_list) {
    let qqq = num_list[0]
    let aaa = 0
    num_list.forEach((el,i) => {
        aaa += el
        i++
        if(num_list.length > i) qqq *= num_list[i]
    })

    return qqq < aaa*aaa ? 1:0
}