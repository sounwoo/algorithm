function solution(M, N) {
  let withd = [], heigth = [];
  if(M === 1 && N === 1) return 0
  for(let i = 1; i <=M; i++){
      heigth.push(i)
  }
  
  return heigth.length * N - 1 

}