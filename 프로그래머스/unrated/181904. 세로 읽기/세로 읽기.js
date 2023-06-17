function solution(my_string, m, c) {
    let answer = ''
    let count = 0
    while(count !== my_string.length / m){
        answer +=(count === 0 ? my_string[c - 1] :  my_string[c-1+(m*count)]);
        count++
    }
    return answer
}