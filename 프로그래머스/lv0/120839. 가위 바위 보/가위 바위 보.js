function solution(rsp) {
    return [...rsp].map((el) =>{
      if(el === "2") return "0"
      else if(el === "5") return "2"
      else return "5"
    }).join("")
}