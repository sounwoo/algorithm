function solution(s) {
  s = s.split('')
  let result = [];
  let obj = {}
  for(let i of s){
    obj[i] = (obj[i] || 0) +1
  }
  for(let key in obj){
    if(obj[key] === 1){
      result.push(key)
    }
  }
    return result.sort().join("")
  
}
