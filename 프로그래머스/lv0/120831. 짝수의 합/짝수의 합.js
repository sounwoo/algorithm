function solution(n) {
    return new Array(n).fill(1).reduce((acc , cur,i )=>{
      let num = 0
      if((i + 1) % 2 === 0 ) num = i + 1
      return acc + num
    },0)
}