function solution(polynomial) {
  let result = 0, num = 0;
    polynomial.replaceAll(" +", "").split(" ").forEach((el) =>{
      if(el.includes("x"))result += Number(el.replace("x","")||1);
      else num += Number(el)
    })
  if(result === 1) result = ""
  if(result === 0) return String(num)
 return num === 0 ? result.toString()+"x" : result.toString()+"x + "+num.toString()
}