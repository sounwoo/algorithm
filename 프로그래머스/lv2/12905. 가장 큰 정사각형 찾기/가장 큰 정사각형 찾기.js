function solution(board){
  let result = 0
  
  if(board.length < 2 || board[0].length < 2) return 1
  
  for(let i = 1 ; i < board.length; i++){
    for(let j = 1; j < board[i].length; j++){
    if(board[i][j] === 0) continue;  
    let upper = board[i-1][j], upperLeft = board[i-1][j-1] , left = board[i][j-1]
     
     let min = Math.min(upper,upperLeft, left)
     
     board[i][j] = min + 1
      
     if(result < board[i][j]) result = board[i][j]
    }
  }
  return result*result
}