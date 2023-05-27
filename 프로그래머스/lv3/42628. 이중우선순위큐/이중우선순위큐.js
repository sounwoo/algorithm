function solution(operations) {
    const result = []
    const numlist = (num) => result.splice(result.indexOf(num),1)
    
    operations.forEach((el)=>{
      const [command,num] = el.split(" ")
      if(command === "I") result.push(+num)
      else numlist((num > 0 ? Math.max : Math.min)(...result))
    })
    
    return result.length
    ? [Math.max(...result), Math.min(...result)]
    : [0,0]
}