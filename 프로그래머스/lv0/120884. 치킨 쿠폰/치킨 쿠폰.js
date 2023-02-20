function solution(chicken) {
    
  let copoun = 0 , count = 0;
  
  while(chicken > 1){
    count += chicken / 10
    chicken = chicken / 10
  }
  return Math.floor(count)
}