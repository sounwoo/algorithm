function solution(progresses, speeds) {
    let count = [], answer =[];
    const temp = progresses.map((el,i)=>{
      return Math.ceil((100 - el)/ speeds[i])
    })
    
    console.log(temp)
    let distribution = temp[0]
  for(let i =0; i <= temp.length; i++){
    if(temp[i] <= distribution){
      count.push(temp[i])
   }else{
     distribution = temp[i]
     answer.push(count.length)
     count = []
     count.push(temp[i])
   }
  }
    return answer
}