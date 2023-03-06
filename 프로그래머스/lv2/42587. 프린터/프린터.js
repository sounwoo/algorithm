function solution(priorities, location) {  
  const origin = priorities[location]
  priorities[location] = "a"
  
  const recursion = (count) =>{
    const search = priorities.indexOf("a")
    priorities[search] = origin
    const max = Math.max(...priorities)
    priorities[search] = "a"
    
    if(priorities[0] === "a" && origin === max) return ++count
    priorities[0] === max ? count++ : priorities.push(priorities[0])
    priorities.shift()
    
    return recursion(count)
  }
  
  return recursion(0)
    
//   const origin = priorities[location]
//   priorities[location] = "a"
  
//   let answer = 0
//   while(true){
//     const search = priorities.indexOf("a")
//     priorities[search] = origin
//     const max = Math.max(...priorities)
//     priorities[search] = "a"
    
//     if(priorities[0] === "a") {
//       if(origin === max) return ++answer
//     }
    
//     if( priorities[0]  === max ) {
//       priorities.shift()
//       answer ++
//     }else priorities.push(priorities.shift())
//   }
    
//   const a = [], obj = [];
//   const result = [];
//   for(let i = 65; i< priorities.length + 65; i++){
//     a.push(String.fromCharCode(i))
//   }
  
//   const temp = a[location]
//   a.forEach((el,i) => obj.push([el , priorities[i]]))
    
//   while(obj.length > 0){
//     const max = Math.max(...obj.map((el) => el[1]));
//     if(max === obj[0][1]) result.push(obj.shift())
//     else obj.push(obj.shift())
//   }  

//   for(let i =0; i <result.length; i++){
//     if(result[i][0] === temp ) return i + 1
//   }
}