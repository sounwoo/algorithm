function solution(numbers, k) {
  const temp = [];
  let count = 0;
  for(let i =0; i <numbers.length * k; i++){
    if(count === numbers.length){
      count = 0
    }else{
      temp.push(numbers[count])
      count++
    }
    
  }
  return temp[(2 * k) - 2]
}