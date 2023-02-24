function solution(progresses, speeds) {
  const answer = [];
  let day = 0
  
  for(let i = 0; i<progresses.length; i++){
    const process = Math.ceil((100-progresses[i])/ speeds[i])
    if( day < process ) {
      day = process
      answer[ answer.length ] = 1;
    }else answer[ answer.length - 1 ] ++
    
  }
    return answer
  
}