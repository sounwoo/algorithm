function solution(array, n) {
     array = array.map(v => v - n).sort((a, b) => a - b);
  
  return n + array.sort((a, b) => Math.abs(a) - Math.abs(b))[0];
}