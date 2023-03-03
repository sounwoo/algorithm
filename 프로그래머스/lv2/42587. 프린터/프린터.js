function solution(priorities, location) {
  const a = [], obj = [];
  const result = [];
  for(let i = 65; i< priorities.length + 65; i++){
    a.push(String.fromCharCode(i))
  }
  
  const temp = a[location]
  a.forEach((el,i) =>{
    obj.push([el , priorities[i]])
  })
  while(obj.length > 0){
    const max = Math.max(...obj.map((el) => el[1]));
    if(max === obj[0][1]){
      result.push(obj.shift())
    }else{
      obj.push(obj.shift())
    }
  }  

  for(let i =0; i <result.length; i++){
    if(result[i][0] === temp ) return i + 1
  }
  
}