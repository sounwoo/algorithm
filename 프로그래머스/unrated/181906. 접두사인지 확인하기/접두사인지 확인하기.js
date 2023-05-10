function solution(my_string, is_prefix) {
    // let result = 0
    // my_string.split('').reduce((acc,cur) =>acc!== is_prefix ? acc += cur : result++,'')
    // return result
    
    return my_string.slice(0,is_prefix.length) === is_prefix ? 1 : 0
}
