function solution(my_string) {
    return [...my_string].map((el) =>{
      if(!isNaN(el)) return Number(el) 
    }).filter((el) => el !== undefined).sort((a,b) => a-b)
}