function solution(n, arr1, arr2) {
    return arr1.map((map1, i) =>{
      map1 = map1.toString(2).padStart(n,"0")
      const map2 = arr2[i].toString(2).padStart(n,"0")
      return map1.split('').reduce(( acc, cur, j) => {
        return acc + ( cur === '1' || map2[j] === "1"? "#" : " ")
      },"")
  })
    
    
  // const answer = [];
  // // let map1 = [], map2 = [];
  // for(let i =0 ; i < arr1.length; i++){
  //   answer[i] = "";
  //   // map1.push(arr1[i].toString(2).padStart(n,0).split(''))
  //   // map2.push(arr2[i].toString(2).padStart(n,0).split(''))
  //   const map1 = arr1[i].toString(2).padStart(n,"0")
  //   const map2 = arr2[i].toString(2).padStart(n,"0")
  //   for(let j =0 ; j < map1.length; j++){
  //       answer[i] += 
  //         map1[j] === "1" || map2[j] === "1" ?  "#" : " "
  //   }
  // }
  // // let result = map1.map((el)=>{return el.join("")})
  // return answer
}