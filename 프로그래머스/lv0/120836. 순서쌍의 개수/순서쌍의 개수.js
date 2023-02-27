function solution(n) {
  let count = 0
  for(let i =1; i <=n; i++){
    if(n % i === 0) count++
  }
  return count
    // Array(n).fill(1).map((v,idx) => v + idx).filter(v => n % v === 0).length
}