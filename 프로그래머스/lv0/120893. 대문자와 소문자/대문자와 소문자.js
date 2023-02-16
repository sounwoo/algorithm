let lower = "abcdefghijklmnopqrstuvwxyz"
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function solution(my_string) {
  let arr = my_string.split('')  
  let result = ''
    for(let i= 0; i < arr.length;  i++){
      result += lower.includes(arr[i]) 
        ? arr[i].toUpperCase()
        : arr[i].toLowerCase()
    }
  return result
}
