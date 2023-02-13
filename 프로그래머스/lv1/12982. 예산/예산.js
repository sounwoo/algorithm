function solution(d, budget) {
  let count = 0;
  d.sort((a,b)=> a-b)
    for(let i of d){
      if(budget >= i){
        budget -= i
        count++
      }
    }
    return count 
    
    // const answer = d.sort((a,b)=> a-b).filter(money =>{
    //     budget -= money
    //     return budget >= 0
    // })
    //     return answer.length
    
}