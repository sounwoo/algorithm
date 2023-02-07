function solution(nums) {
    const answer = new Set(nums).size
    const limit = nums.length / 2;
    
    if( limit >= answer )
        return answer;
    
    return limit;

    
//     const answer = []
    
//     for( let i = 0; i < nums.length; i++ ) {
//         if( 
//             (nums.length / 2) !== answer.length  &&
//             answer.includes( nums[i] ) === false
//           ) {
//             answer.push( nums[i] )
//         }
//     }
//     return answer.length
// -----------------------------------------------------------   
//      const answer = new Set([]);
    
//     for( let i = 0; i < nums.length; i++ ) {
//         if( (nums.length / 2) !== answer.size ) {
//             answer.add( nums[i] );
//         }
//     }
//     return answer.size
// -----------------------------------------------------------   
//     const pocket = [];
    
//     nums.forEach( monster => {
//         if( 
//             pocket.includes( monster ) === false &&
//             pocket.length < (nums.length / 2)
//         ) {
//             pocket.push(monster);
//         }
//     })
//     return pocket.length;
// -----------------------------------------------------------    
//     const answer = nums.reduce((acc, cur) => {
//         if(!acc.includes(cur) && (nums.length / 2) !== acc.length)
//             acc.push(cur)
//         return acc
//     }, [])
    
//     return answer.length
    
    
}