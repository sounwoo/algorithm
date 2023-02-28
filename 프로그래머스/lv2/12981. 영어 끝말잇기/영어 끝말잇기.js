function solution(n, words) {
    const answer = [0,0]
  let user = [words[0]];
  
  for(let i =1; i < words.length; i++){
    let word = words[i - 1];
    let nextWord = words[i]
    if(word.slice(-1) === nextWord[0] && !user.includes(nextWord)){
      user.push(nextWord)
    }else{
      return [(i%n+1), parseInt(i/n) + 1]
    }
  }
  return answer
  // const temp = {}, temp2 = [];
  // let count = 1, emtyp = [], result = []
  // for(let i =1; i <= n; i++){
  //   temp[i] = []
  // }
  // for(let i = 0; i < words.length; i++){
  //   if(temp2.length !== 0){
  //     if(words[i].slice(0,1) !== temp2.at(-1).at(-1)){
  //        emtyp.push(words[i])
  //     }
  //   }
  //   temp[count].push(words[i])
  //   n === count ? count = 1 : count++    
  //   if( temp2.includes(words[i])){
  //     emtyp.push(words[i])
  //       break;
  //   }
  //   temp2.push(words[i])
  // }
  // for(let i in temp){
  //   if(temp[i].includes(emtyp[0])){
  //     result = [Number(i),temp[i]]
  //   }
  // }
  // return result.length === 0 ? [0,0]:[result[0],result[1].indexOf(emtyp[0])+1]
}