function solution(emergency) {
    let temp = [...emergency].sort((a,b) => b - a);
    return emergency.map((el) => temp.indexOf(el)+1 )
  
//   let obj = {}, temp = [...emergency];
//     for(let i =0; i <emergency.length; i++){
//       emergency.sort((a,b) => b - a )
//       obj[emergency[i]] = i + 1
//     }
  
//   return temp.map((el) => obj[el])
}