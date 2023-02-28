const permission = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";
function solution(new_id) {
    new_id = new_id.toLowerCase().split("")
    
    let answer = new_id.filter(( str ) => permission.includes( str ))
    answer = answer.filter(( str, i ) => str !== "." || str === "." && answer[ i + 1 ] !== ".")
    
    if( answer[0] === '.') answer.splice( 0, 1 );
    const removeLastDot = function(){
      if( answer[answer.length - 1] === ".") answer.splice(answer.length - 1, 1)
    }
    removeLastDot()
    if(answer.length === 0) answer = ["a"]
    if(answer.length >= 16){
      answer = answer.splice( 0, 15 )
      removeLastDot()
    } 
    if( answer.length < 3) {
      const add = new Array( 3 - answer.length ).fill( answer.at(-1) )
      answer = answer.concat( add );
    }
    return answer.join("")
    
//     new_id = new_id.toLowerCase()
//     // 2단계
//     let answer = ""
//     for(let i =0; i < new_id.length; i++){
//         if( permission.includes( new_id[i] )){
//             answer += new_id[i]
//         }
//     }
//     // 3단계
//     while( answer.includes("..")){
//         answer = answer.replaceAll("..",".")
//     }
//   // 4단계
//   if( answer[0] === ".") answer = answer.slice( 1 )
//   const removeLastDot = function(){
//     if( answer.at(-1) === ".") answer = answer.slice( 0, -1 )
//   }
//   removeLastDot()
//   // 5단계
//   if( answer === "") answer = "a"
//   // 6단계
//   if( answer.length >= 16 ) {
//     answer = answer.slice(0,15)
//     removeLastDot()
//   }
//   // 7단계
//   if( answer.length < 3) answer = answer.padEnd( 3, answer.at(-1))
  
//   return answer
    
    
  //   new_id = new_id.toLowerCase()
  //   new_id = new_id.replace(/[^\w\.\-]/g,'')
  //   new_id = new_id.replace(/[\.]{2,}/g,".")
  //   new_id = new_id.replace(/^\./,'').replace(/\.$/,'');
  //   if(new_id === '') new_id = "a"
  //   if(new_id.length >= 16){
  //     new_id = new_id.slice(0,15).replace(/\.$/,'')
  //   }
  // while(new_id.length < 3){
  //   let temp = new_id.slice(-1) 
  //   new_id += temp
  // }
  // return new_id
}
