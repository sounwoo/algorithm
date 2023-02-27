function solution(numer1, denom1, numer2, denom2) {
    let sum = 1
    let a =denom1 * denom2
    let b = numer1 * denom2 + numer2 * denom1
    for(let i = 1; i<=a; i++){
        if( a % i === 0 && b % i === 0){
            sum = i
        }
    }
  
    return [b/sum,a/sum]
    
    
//   let sum = 2, result = [0,0];
//   let a =denom1 * denom2
//   let b = numer1 * denom2 + numer2 * denom1
//   if( a / b === 1) return [1,1]
//   while(a !== sum){
//     if(Number.isInteger(a / sum) && Number.isInteger(b / sum)){
//       result[0,0] = [ b/sum,a/sum ]
//     }
//     sum ++
//   }
  
//   return result[0] !== 0 ? result[0] : [b,a]
}
