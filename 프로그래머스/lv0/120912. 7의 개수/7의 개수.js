function solution(array) {
  let count = 0;
    for(let i =0 ; i < array.length; i++){
      for(let j = 0; j < array[i].toString().length; j++){
        if (array[i].toString().split('')[j] === "7") count ++ 
      }
    }
  return count
}
