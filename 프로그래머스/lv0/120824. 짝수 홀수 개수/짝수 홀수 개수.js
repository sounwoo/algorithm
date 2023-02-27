function solution(num_list) {
  const even =[], odd = [];
  num_list.forEach((el)=>el % 2 === 0 ? even.push(el) : odd.push(el)) 
  return [even.length, odd.length]
}