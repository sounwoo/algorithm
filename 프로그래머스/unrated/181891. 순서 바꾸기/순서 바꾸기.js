function solution(num_list, n) {
    const temp = num_list.splice(n)
    return temp.concat(num_list)
}