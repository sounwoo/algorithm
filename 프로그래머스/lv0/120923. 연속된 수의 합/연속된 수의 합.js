function solution(num, total) {
  let temp = Math.ceil(total / num - num /2)
  let sum = temp;
  const result = []
  
  while(true){
    result.push(temp)
    sum += temp
    temp++
    if(result.length === num) return result
  }
}
