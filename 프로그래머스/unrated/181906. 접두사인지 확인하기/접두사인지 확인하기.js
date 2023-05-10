function solution(my_string, is_prefix) {
    let result = 0
    const a = [...my_string].reduce((acc,cur) =>{   
        return acc!== is_prefix ? acc += cur : result++
    },'')
    return result
}