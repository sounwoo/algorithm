function solution(n, arr1, arr2) {
  let newArr1 = [], newArr2 = [];
  for(let i =0 ; i < arr1.length; i++){
    newArr1.push(arr1[i].toString(2).padStart(n,0).split(''))
    newArr2.push(arr2[i].toString(2).padStart(n,0).split(''))
  }

  
  for(let i =0 ; i < newArr1.length; i++){
    for(let j =0 ; j < newArr1[i].length; j++){
      newArr1[i][j] === "1" || newArr2[i][j] === "1" ? newArr1[i][j] = "#" : newArr1[i][j] = " "
    }
  }
  let result = newArr1.map((el)=>{return el.join("")})
  return result 
}