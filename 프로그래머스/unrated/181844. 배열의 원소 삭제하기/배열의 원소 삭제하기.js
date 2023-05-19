function solution(arr, delete_list) {
     return arr.filter((el, i) =>!delete_list.includes(el))
}