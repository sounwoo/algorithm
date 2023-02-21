const [leftNumbers, rightNumbers] = [[1,4,7],[3,6,9]]

function solution(numbers, hand) {
    const current = {
      left :10,
      right : 12
    }
    
        const answer = numbers.reduce(( acc, cur ) => {
        let [ useFinger, target, number ] = [ "", "", 0 ]
        
        if( leftNumbers.includes( cur ) ) {
            [ useFinger, target, number ] = [ "L", "left", cur ]
        } else if( rightNumbers.includes( cur ) ) {
            [ useFinger, target, number ] = [ "R", "right", cur ]
        } else {

            const locationObj = Object.entries( current ).reduce(( acc2, cur2 ) => {
                // const targetHand = cur2[0];
                cur = cur === 0 ? 11 : cur;
            
                let location = Math.abs(cur - cur2[1]);
                if( location > 2 ) {
                    location = Math.trunc( location / 3 ) + location % 3;
                }
            
                acc2[ cur2[0] ] = location;
                return acc2
            }, {})
        
            if( locationObj.left === locationObj.right ) {
                [ useFinger, target, number ] = [ 
                    hand === "left" ? "L" : "R",
                    hand,
                    cur
                ]
            } else if( locationObj.right < locationObj.left ) {
                [ useFinger, target, number ] = [ "R", "right", cur ]
            } else {
                [ useFinger, target, number ] = [ "L", "left", cur ]
            }
        }
        
        current[ target ] = number
        return acc + useFinger
    }, "")
        
  // for(let i = 0; i < numbers.length; i++){
  //     if(leftNumbers.includes(numbers[i])) {
  //       answer += "L"
  //       current["left"] = numbers[i]
  //     }else if(rightNumbers.includes(numbers[i])) {
  //       answer +="R"
  //       current["right"] = numbers[i]
  //     }else {
  //        const locationObj = {...current}
  //        for( let hand in locationObj){
  //          numbers[i] = numbers[i] === 0 ? 11 : numbers[i]
  //          let location = Math.abs(numbers[i] - locationObj[hand])
  //          if( location >=  3) location = Math.trunc(location / 3) + location % 3  
           
  //          locationObj[hand] = location
  //        }
  //       if(locationObj.left === locationObj.right){
  //         answer += hand === "left" ? "L" : "R"
  //         current[hand] = numbers[i]
  //       }else{
  //         if(locationObj.left > locationObj.right){
  //           answer += "R"
  //           current.right = numbers[i]
  //         }else {
  //           answer += "L"
  //           current.left = numbers[i]
  //         }
  //       }
  //     }
  //   }
    return answer
}