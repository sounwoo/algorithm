function solution(n) {
  let count = 0;
    for(let i =1; i <= n; i++){
      let temp = []; 
      for(let j = 1; j <=n; j++){
        if(i % j === 0) temp.push(j)
      }
      if(temp.length < 3) temp = []
      else count++
    }
  return count
}