function solution(numbers) {
  const temp = [];
    for(let i =0; i < numbers.length; i++){
      for(let j = i+1; j<numbers.length; j++){
       temp.push(numbers[i] * numbers[j]) 
      }
    }
  return temp.sort((a,b) => b - a)[0]
}