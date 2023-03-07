function solution(left, right) {
  let result = 0
    for(let i = left; i <= right; i++){
      const temp = [] // count = 0
      for(let j = 1; j <= right; j++){
        if(i % j === 0) temp.push(j) // count ++
      }
        // count % 2 === 0
      if(temp.length % 2 === 0) result += i
      else result -= i
    }
  return result
}