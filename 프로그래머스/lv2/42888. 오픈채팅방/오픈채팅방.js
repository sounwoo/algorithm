function solution(record) {
    let obj = {}
    record.forEach((el) =>{
      
      if(el.split(" ")[2]) obj[el.split(" ")[1]] = el.split(" ")[2]
    })
    const result = record.map((el)=>{
      const action = el.split(" ")
      if(action[0] === "Enter"){
        return `${obj[action[1]]}님이 들어왔습니다.`
      }else if(action[0] === "Leave"){
        return `${obj[action[1]]}님이 나갔습니다.`
      }
    })
    console.log(result)
    return result.filter((el) => el)
}