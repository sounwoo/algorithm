function solution(n) {
    let answer = 1, sum = 0
    while(answer <= n){
        sum++
        answer *= sum
    }
    return sum-1;
    
    
  //   let sum = 0,count = 1;
  //   for(let i = 1; i <= n; i++){
  //     count *= i
  //     if(count > n) break;
  //     sum = i
  //   }
  // return sum
}