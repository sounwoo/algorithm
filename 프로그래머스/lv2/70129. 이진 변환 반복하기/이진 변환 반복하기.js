function solution(s) {
  let answer = [0,0]
    while(s !== "1"){
      answer[0] ++
      for(let i = 0; i < s.length; i++){
        if(s[i] === "0") answer[1] ++
      }
      s = s.replaceAll(0,"").length.toString(2)
    }
  return answer
}