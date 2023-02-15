function solution(s) {
    function recursion(s, [count,remove]){
        if(s === "1") return [count,remove]
        count++  
        remove += s.split('').filter(el => el === '0').length;
        s = s.split("").filter(el => el === "1").length.toString( 2 )
    
        return recursion(s, [count,remove])
    
  }
    
  return recursion(s, [0,0])
    
    
  // let answer = [0,0]
  //   while(s !== "1"){
  //     answer[0] ++
  //     for(let i = 0; i < s.length; i++){
  //       if(s[i] === "0") answer[1] ++
  //     }
  //     s = s.replaceAll(0,"").length.toString(2)
  //   }
  // return answer
}