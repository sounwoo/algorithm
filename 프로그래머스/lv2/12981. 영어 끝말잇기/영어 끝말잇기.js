function solution(n, words) {
    for(let i = 1; i < words.length; i++){
        const player = (i % n) + 1
        const turn = Math.floor(i/n) + 1
        const preWord = words[i - 1][ words[i - 1].length - 1]
        const nowWord = words[i][0]
    
        if(preWord !== nowWord || words.indexOf( words[i] ) !== i) return [player,  turn]
    }
    
    return [ 0, 0 ]
    
//     let stop = false
//     return words.slice( 1 ).reduce(( acc, cur ,i )=> {
//         const nowWord = cur[0];
//         const prevWord = words[i][words[i].length- 1]
    
//         i++
//         const player = (i % n) +1
//         const trun = Math.floor(i / n) +1
    
//         if(!stop && (nowWord !== prevWord|| words.indexOf(words[i]) !== i)) {
//             stop = true
//             return [ player, trun  ]
//         }
//     return acc
//   },[0,0])
    
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
