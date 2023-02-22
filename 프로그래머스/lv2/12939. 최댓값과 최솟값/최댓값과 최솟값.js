function solution(str) {
  str = str.split(" ")
  
  return  `${Math.min(...str)} ${Math.max(...str)}`
}