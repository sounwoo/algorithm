function solution(n_str) {
    let temp = ''
    n_str.split('').forEach((el) => {
        if(el !== '0' || temp !==''){
            temp +=el
        }
    })
    return temp
}