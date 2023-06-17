function solution(my_string, m, c) {
    
    return [...my_string].filter((_,i) => i % m === c-1).join('')
    
    // let answer = ''
    // let count = 0
    // while(count !== my_string.length / m){
    //     answer +=(!count ? my_string[c - 1] :  my_string[c-1+(m*count)]);
    //     count++
    // }
    // return answer
}