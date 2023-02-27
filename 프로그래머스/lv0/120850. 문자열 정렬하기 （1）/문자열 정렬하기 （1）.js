function solution(my_string) {
    return [...my_string].filter((el) => !isNaN(el)).map((el) => +el).sort((a,b) => a-b)
}