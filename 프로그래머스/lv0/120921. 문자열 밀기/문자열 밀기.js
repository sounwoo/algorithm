function solution(A, B) {
  let count = 0;
  if(A === B) return 0
  for(let i = 0; i <= A.length; i++){
    if(B === A) break;
    else{
      A = A.split('')
      let tepm = A.pop()
      A.unshift(tepm)
      A = A.join('')
     count ++
    }
  }
  return count > A.length? -1 :count 
}