function solution(num_list) {
  const num = [0,0]
  num_list.forEach((el)=>el % 2 === 0 ? num[0]++ : num[1]++) 
  return num
}