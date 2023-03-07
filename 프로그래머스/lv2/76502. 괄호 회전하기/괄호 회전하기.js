const numbering = {
  "[" : 0,
  "]" : 1,
  "{" : 2,
  "}" : 3,
  "(" : 4,
  ")" : 5
}
function solution(s) {
    return s.split("").reduce( (acc, cur, i) => {
        const str = s.substring( i + 1 ) + s.substring( 0, i + 1 );
        
      let fail = false; 
        const stack = str.split("").reduce( (acc2, cur2) => {
            if( fail === false ) {
                if( numbering[ cur2 ] % 2 === 0 ) {
                    acc2.push( numbering[ cur2 ] );
                } else {
                    if( acc2[ acc2.length - 1 ] === numbering[ cur2 ] - 1 ) {
                        acc2.splice( acc2.length - 1, 1 ); // pop()
                    } else if( acc2.includes( numbering[ cur2 ] - 1 ) === false ) {
                        fail = true;
                    }
                }
            }
            return acc2;
        }, [])
        return acc += (
            stack.length === 0 && fail === false ? 1 : 0
        );
    }, 0)
//   let answer = 0;
  
//   for(let i = 0; i < s.length; i++){
//     s = s.slice(1) + s[0]
    
//     const stack = [];
//     for(let j = 0; j < s.length; j++){
//       if( numbering[ s[j] ]  % 2 === 0) stack.push( numbering[ s[j] ] )
//       else {
//         if( stack.includes( numbering[ s[j] ] - 1 ) ){
//           const last = stack[ stack.length - 1 ]
          
//           if( last === numbering[ s[j] ] - 1 ) stack.splice(stack.length -1, 1)
//         }else break;
//       }
//       if( j === s.length - 1) {
//          if( stack.length === 0 ) answer++
//       }
//     }
    
//   }
//   return answer
}