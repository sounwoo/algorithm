function solution(array) {
  let obj = {}, result = []
    for(let i =0; i < array.length; i++){
      obj[array[i]] = (obj[array[i]]||0) + 1 
    }
  for(let i in obj){
    result.push([i,obj[i]])
  }
    
  result.sort((a,b) => b[1] - a[1])
  if(result.length === 1) return Number(result[0][0])
  if(result[0][1] === result[1][1]) return -1
  return Number(result[0][0])
}