function solution(n) {
    // if (n <= 0) return 0;
    // else if (n === 1) return 1;
    // return solution(n - 1) + solution(n - 2);
    
     // let prev = 0; // 피보나치의 0번째 숫자
     // let next = 1; // 피보나치의 1번째 숫자
     // let sum = 1;
     // for (let i = 0; i < n - 1; i++) {
     //     if (n <= 0) return 0;
     //     else if (n === 1) return 1;
     //     sum = (prev + next) % 1234567;
     //     prev = next;
     //     next = sum;
     // }
     // return sum;
    
    let prev = 0; // 피보나치의 0번째 숫자
    let next = 1; // 피보나치의 1번째 숫자
    let sum = 1;
  
  const answer = new Array(n - 1).fill(1).reduce((acc) => {
        sum = (acc + prev) % 1234567
        prev = acc 
        return sum;
    },sum)
    return answer
}