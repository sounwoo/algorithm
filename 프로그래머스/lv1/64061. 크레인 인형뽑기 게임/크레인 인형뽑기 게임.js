function solution(board, moves) {
  let count = 0
  let result = [];
    
    moves.forEach(( move ) => {
        let pick = false;
        board.forEach(( location ) => {
            const temp = location[move - 1]
            if( pick === false){
                if(temp !== 0){
                    location[ move -1 ] = 0 ;
                    if(temp === result.at(-1)){
                        result.pop()
                        count += 2
                        pick = true
                    }else{
                        result.push(temp)  
                    }
                    pick = true
                }
            }
      })
 })
  return count
    
  // for(let i = 0; i < moves.length; i++){
  //   for(let j = 0; j< board.length; j++){
  //    const temp = board[j][moves[i]-1]
  //     if(temp !== 0) {
  //     board[j][moves[i]-1] = 0
  //        if( temp === result.at(-1)) {
  //           result.pop()
  //           count += 2
  //           break;
  //         }
  //         result.push(temp)
  //         break;
  //     }
  //   }
  // }
  //  return count
}
