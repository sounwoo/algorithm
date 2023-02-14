function solution(quiz) {
  let result = []; 
  for(let i =0; i <quiz.length; i++){
    let word = quiz[i].split(" ")
    if(word[1] === '-'){
      if(Number(word[0]) - Number(word[2]) === Number(word[4])){
        result.push("O")
      }else{
        result.push('X')
      }
    }else{
      if(Number(word[0]) + Number(word[2]) === Number(word[4])){
        result.push("O")
      }else{
        result.push('X')
      }
    }
  }
  return result
}