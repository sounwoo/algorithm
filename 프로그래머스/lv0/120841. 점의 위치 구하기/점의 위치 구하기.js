function solution(dot) {
  if(Math.sign(dot[0]) === 1 && Math.sign(dot[1]) === 1) return 1
  else if(Math.sign(dot[0]) === 1 && Math.sign(dot[1]) === -1) return 4
  else if(Math.sign(dot[0]) === -1 && Math.sign(dot[1]) === -1) return 3
  else return 2
}