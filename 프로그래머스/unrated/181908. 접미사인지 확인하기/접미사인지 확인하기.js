function solution(my_string, is_suffix) {
    return [...my_string].map((_,i) => my_string.slice(my_string.length - i -1)).map((el) => el === is_suffix ? "1":"").join('').length ? 1 : 0
}