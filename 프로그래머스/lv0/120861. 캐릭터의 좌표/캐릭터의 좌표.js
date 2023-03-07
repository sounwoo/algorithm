function solution(keyinput, board) {
  const answer = [0,0];
    for(let i = 0; i < keyinput.length; i++){
        switch (keyinput[i]){
            case "left": 
             answer[0] = Math.abs(answer[0] - 1)<=Math.floor(board[0]/2) 
                    ? answer[0]-1 : answer[0]
                break;
            case "right": 
             answer[0] = Math.abs(answer[0] + 1)<=Math.floor(board[0]/2) 
                    ? answer[0]+1 : answer[0]
                break;
            case "up": 
             answer[1] = Math.abs(answer[1] + 1)<=Math.floor(board[1]/2) 
                    ? answer[1]+1: answer[1]
                break;
            case "down": 
             answer[1] = Math.abs(answer[1] - 1)<=Math.floor(board[1]/2) 
                    ? answer[1]-1 : answer[1]
                break;
        }
    }
   return answer
}