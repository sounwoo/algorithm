function solution(polynomial) {
  let result = 0, num = 0;
    polynomial.replaceAll(" +", "").split(" ").forEach((el) =>{
      if(el.includes("x")){
        if(el.replaceAll("x","") === "")result +=1
        else result += Number(el.split("x")[0])
      }else num += Number(el)

    })
  if(result === 1) result = ""
  if(result === 0) return String(num)
 return num === 0 ? result.toString()+"x" : result.toString()+"x + "+num.toString()
}