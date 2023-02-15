function solution(my_string, num1, num2) {
  let result = ""
  let a = my_string[num1]
  let b = my_string[num2]
    for(let i = 0; i < my_string.length; i++){
      if(i === num1){
        result += b
      }else if(i === num2){
        result += a
      }else{
        result += my_string[i]
      }
    }
  return result
}