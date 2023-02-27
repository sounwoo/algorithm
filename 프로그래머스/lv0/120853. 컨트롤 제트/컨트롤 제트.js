function solution(s) {
  let sum = 0
    return s.split(" ").reduce((acc,cur)=>{
      if(cur !== "Z") sum = cur
      return acc + (cur === "Z" ? -sum : Number(cur))
    },0)
}