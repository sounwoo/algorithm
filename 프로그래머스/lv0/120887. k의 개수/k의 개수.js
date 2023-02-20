function solution(i, j, k) {
  let sum = [] , result = 0, answer = 0;
  for(let z = i ; z<=j ; z++){
    sum.push(z)
  }
  
  for(let i of sum){
   result = (i).toString().split('')
    result.map((el) =>{
      if(Number(el) === k) answer ++
    })
    
  }
return answer
}