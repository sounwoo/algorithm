let lower = "abcdefghijklmnopqrstuvwxyz"
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function solution(my_string) {
  let arr = my_string.split('')  
  let result = ''
    for(let i= 0; i < arr.length;  i++){
      if(lower.includes(arr[i])){
      result += arr[i].toUpperCase()
         }else{
      result += arr[i].toLowerCase()
         }
    }
  return result
}
