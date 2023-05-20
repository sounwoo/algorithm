function solution(num_list, n) {
    return [...num_list.slice(n), ...num_list.slice(0,n)]
    // const temp = num_list.splice(n)
    // return temp.concat(num_list)
}