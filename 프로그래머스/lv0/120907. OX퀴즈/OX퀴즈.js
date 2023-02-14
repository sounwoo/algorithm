function solution(quiz) {
  let result = []; 
  for(let i =0; i <quiz.length; i++){
    let word = quiz[i].split("=")
      eval(word[0]) === Number(word[1]) 
        ? result.push("O") 
        : result.push('X')
  }
  return result
}