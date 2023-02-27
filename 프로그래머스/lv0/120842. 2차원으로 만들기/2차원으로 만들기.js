function solution(num_list, n) {
    let temp = [], answer =[];
  
  num_list.forEach((el) =>{
    temp.push(el)
    if(temp.length === n){
      answer.push(temp)
      temp = []
    }
  })
  return answer
}