

function solution(s,n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  
  const answer = s.split("").reduce((acc,cur) => {
    const word = lower.includes( cur ) ? lower : upper;
    let idx = word.indexOf( cur ) + n
    
    if( idx > 25 ) idx -=26
    return acc + (cur === " " ? " " : word[idx])
  },"")

//   let answer = "";
//   for(let i = 0; i < s.length; i++){
//     if(s[i] === " ") answer += s[i] // 공백일 경우 s[i] = " "
//     else{
//       let idx = s[i].charCodeAt() + n
      
//       if( idx > 122 || ((idx > 90) && (idx - n) < 97) ){
//         idx -= 26
//       }
//       answer += String.fromCharCode(idx)
//     }
//   }
  
  //   const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const lower = "abcdefghijklmnopqrstuvwxyz";
//   let answer = "";
//   for(let i = 0; i < s.length; i++){
//     if(s[i] === " ") answer += s[i] // 공백일 경우 s[i] = " "
//     else{
//       const word = lower.includes( s[i] ) ? lower : upper;
//       let idx = word.indexOf( s[i] ) + n ;

      
//       if ( idx > 25) {
//         idx -= 26;
//       }
      
//       answer += word[idx]
//     }
//   }
  
  
  // const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // let answer = "";
  // for(let i = 0; i < s.length; i++){
  //   if(s[i] === " ") answer += s[i] // 공백일 경우 s[i] = " "
  //   else{
  //     let idx = alphabet.indexOf( s[i] )
  //     const word = idx > 25 ? alphabet.slice( 26 ) : alphabet.slice( 0,26 )
  //     idx = word.indexOf( s[i] ) + n
      
  //     if( idx > 25 ){
  //       idx -= 26
  //     }
      
  //     answer += word[idx]
  //   }
  // }
  
      return answer
}