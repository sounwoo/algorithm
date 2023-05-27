function solution(operations) {
    const result = []
    const numlist = (num) =>{
      result.splice(result.indexOf(num),1)
    }
    operations.forEach((el)=>{
      const [command,num] = el.split(" ")
      console.log(command, num,result)
      if(command === "I") result.push(+num)
      else {
        if(num > 0) numlist(Math.max(...result))
        else numlist(Math.min(...result))
      }
    })
    return result.length
    ? [Math.max(...result), Math.min(...result)]
    : [0,0]
}