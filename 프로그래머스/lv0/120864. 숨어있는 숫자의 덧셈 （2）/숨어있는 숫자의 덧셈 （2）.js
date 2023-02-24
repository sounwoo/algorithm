function solution(board) {
  return board.split(/[^0-9]/).reduce((a,b) => a+Number(b),0)
}