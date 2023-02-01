function solution(d, budget) {
  let count = 0;
  d.sort((a,b)=> a-b)
    for(let i of d){
      if(budget >= i){
        budget -= i
        count++
      }else break;
    }
    return count 
}