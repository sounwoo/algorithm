function solution(num_list, n) {
    return num_list.filter((el, i) => {
        if(i < n) return el
    })
}