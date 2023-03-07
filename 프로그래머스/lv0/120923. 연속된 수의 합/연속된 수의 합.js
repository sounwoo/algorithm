function solution(num, total) {
  let temp = Math.ceil(total / num - num /2)
  return new Array(num).fill(temp).map((_,i)=> i + temp)
}