function solution(skill, skill_trees) {
    const answer = skill_trees.reduce((acc, cur)=> {
      const filltered = [...cur].filter((str)=>{
        return skill.includes(str)
      }).join("")
      return acc + ( (skill.includes( filltered ) && skill[0] === filltered[0]) || 
                    filltered === '' 
                    ? 1
                    : 0 )
    },0)
    return answer
//     let answer = 0;
  
//     for(let i =0; i < skill_trees.length; i++){
//       let filltered = "";
//       for(let j =0 ; j < skill_trees[i].length; j++){
//         if( skill.includes( skill_trees[i][j] ) ){
//           filltered += skill_trees[i][j]
//         }
//       }
//       if( filltered === "" ) filltered = skill
//       if( skill.includes( filltered ) ){
//           if( filltered[0] === skill[0] ){
//             answer++
//           }
//         }
//     }
//   return answer
    
    
    
//     let answer = 0;
  
//     for(let i =0; i < skill_trees.length; i++){
//       let curresntIdx = 0;
//       for(let j = 0; j < skill_trees[i].length; j++){
//         const idx = skill.indexOf( skill_trees[i][j] )
//         if( idx !== -1){
//           if( idx !== curresntIdx ) break;
//           curresntIdx++
//         }
//         if( j === skill_trees[i].length - 1 ) answer++
//       }
//     }
//   return answer
}
