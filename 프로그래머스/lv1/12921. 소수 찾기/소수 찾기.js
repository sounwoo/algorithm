// function solution(n) {
//   let count = 0;

//   // 2부터 n까지의 수 중 소수인 수의 개수를 구함
//   for (let i = 2; i <= n; i++) {
//     let isPrime = true;

//     // 2부터 i의 제곱근까지의 수로 나눠서 나머지가 0인 경우가 있으면 소수가 아님
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) count++;
//   }
//   return count;
// }

function solution(n) {
  const prime = new Array(n + 1).fill(true);
  let count = 0;

  prime[0] = false;
  prime[1] = false;
  // 에라토스테네스의 체
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (prime[i]) {
      for (let j = i * i; j <= n; j += i) {
        prime[j] = false;
      }
    }
  }
  for (let i = 2; i <= n; i++) {
    if (prime[i]) count++;
  }

  return count;
}