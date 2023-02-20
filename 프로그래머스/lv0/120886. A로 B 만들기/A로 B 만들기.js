function solution(before, after) {
  let obj = {} , obj1 = {} 
  for(let i = 0; i < before.length; i++){
      obj[before[i]] = (obj[before[i]] || 0) +1
      obj1[after[i]] = (obj1[after[i]] || 0) +1
    }

  for(let i in obj){
    if (obj[i] !== obj1[i]) return 0
  }
  return 1
}