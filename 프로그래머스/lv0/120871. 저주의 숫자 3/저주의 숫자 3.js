function solution(n) {
    let a = 0 
  
    for(let i = 1;  i <= n; i++){
      a++
      while(a % 3 === 0 || String(a).includes('3')){ 
        a ++     
      }
    }
  return a 
}