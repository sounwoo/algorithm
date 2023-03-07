function solution(a, b) {
  const max = Math.max(a,b)
  let num = 1
  for(let i = 1 ; i < max; i++){
    if(a % i===0 && b % i === 0) num = i
  }
  b /= num
  while(true){
    if ( b % 2  === 0) b /= 2
    else if( b % 5 === 0)b /= 5
    else break;
  }
  
  return b === 1 ? 1 :2
}