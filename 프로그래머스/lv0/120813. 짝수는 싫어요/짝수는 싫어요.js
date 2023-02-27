function solution(n) {
    return new Array(n + 1).fill(1).map((el,i) =>{
      if(i % 2 !== 0) return i
    }).filter((el) => el)
}