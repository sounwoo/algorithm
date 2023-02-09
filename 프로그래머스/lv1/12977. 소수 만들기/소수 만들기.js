function solution(nums) {
    let answer = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j< nums.length; j++){
            for(let k = j + 1; k<nums.length; k++){
               const sum = nums[i]+nums[j]+nums[k]
                let count = 0;
                for(let l = 1; l <= sum; l++){
                  if(sum % l === 0){
                    count++
                    if(count > 2){
                      break ;
                    }
                  }
                }
              if(count === 2) {
                answer++
              }
            }
        }
    }
    return answer
    
    
//     let answer = 0 , index = 0;
//      nums.forEach((num1, i) => {
//          index = i +1
//          nums.slice(index).forEach((num2) => {
//              index ++
//              nums.slice(index).forEach((num3) =>{
//                  const sum = num1 + num2 + num3
        
//                  let count = 0;
//              for(let k = 1; k <= sum; k++){
//                   if(sum % k === 0){
//                     count++
//                   if(count > 2){
//                     break ;
//                   }
//                 }
//               }
//               if(count === 2) {
//                 answer++
//               }
//          })
//      })
//  })
    
}