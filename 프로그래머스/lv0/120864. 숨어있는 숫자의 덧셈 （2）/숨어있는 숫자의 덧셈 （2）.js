function solution(board) {
  let answer = 0;
  board = board.replace(/[a-zA-Z]/g, " ").split(" ").filter(el => el !== "")
  board.forEach(el => answer +=Number(el))
  return answer
}