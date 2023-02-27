function solution(n) {
    let sum = 0,count = 1;
    for(let i = 1; i <= n; i++){
      count *= i
      if(count > n) break;
      sum = i
    }
  return sum
}