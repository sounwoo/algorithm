function solution(my_strings, parts) {
    return parts.map((el,i) => my_strings[i].slice(el[0] , el[1] + 1)).join('')
}