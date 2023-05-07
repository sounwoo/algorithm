function solution(my_string, index_list) {
    return index_list.map((el) => {
        return my_string[el]
    }).join('')
}