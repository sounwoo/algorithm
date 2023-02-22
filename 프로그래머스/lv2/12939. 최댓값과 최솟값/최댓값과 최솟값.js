function solution(str) {
  str = str.split(" ")
  const answer = str.map(el => Number(el))
  return  `${Math.min(...answer)} ${Math.max(...answer)}`
}