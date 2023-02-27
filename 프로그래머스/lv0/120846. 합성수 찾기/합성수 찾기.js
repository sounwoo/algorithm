function solution(n) {
  let temp = [], count = 0;
    for(let i =1; i <= n; i++){
      for(let j = 1; j <=n; j++){
        if(i % j === 0) temp.push(j)
      }
      if(temp.length < 3) temp = []
      else count++
      temp = []
    }
  return count
}