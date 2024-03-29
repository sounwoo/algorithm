function solution(msg) {
  const dictionary = {};
  let index = 1;
  for(let i = 65 ; i <= 90; i++){
    dictionary[ String.fromCharCode(i) ] = index++
  }
  
  let str = '';
  return msg.split("").reduce((acc,cur,i) => {
    str += cur
    const next = str + msg[i + 1]
    if( !dictionary[ next ] ){
        if( msg[i +1]) dictionary[ next ] = index++
        acc.push( dictionary[str] )
        str = ''
    }
    return acc
  },[])
//   const answer = [];
//   let str = ""
//   for(let i =0 ; i < msg.length; i++){
//     str += msg[i]
//     const next = str + msg[i + 1]
    
//     if( !dictionary[ next ] ) {
//       dictionary[ next ] = index++
//       answer.push(dictionary[ str ])
//       str = '' 
//     }
//   }
//   return answer
}