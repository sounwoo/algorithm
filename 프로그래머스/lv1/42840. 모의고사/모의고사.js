 const answerTable = [
    // 1번 수포자가 찍는 방식
    [ 1, 2, 3, 4, 5 ], // 5개 패턴
    // 2번 수포자가 찍는 방식
    [ 2, 1, 2, 3, 2, 4, 2, 5 ], // 8개 패턴
    // 3번 수포자가 찍는 방식
    [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ] // 10개 패턴
]

function solution(answers) {
    const scoreList = answerTable.map((el, i) => {
        const score = answers.reduce((acc,cur,j) => {
            return acc + ( el[j % el.length] === cur ? 1 : 0 )
        },0)
        
        return { student :  i + 1, score}
    })
    const biggest = Math.max(...scoreList.map((el) => {
        return el.score
    }))
    
    const answer = scoreList.filter((el) => {
       
        return el.score === biggest
    }).map((el) => {

        return el.student
    })

    return answer
//        let score = [0,0,0]
       
//         for(let i = 0; i < answers.length; i++){
//             for(let j = 0; j < answerTable.length; j++){
//                 const answer = answerTable[j][ i % answerTable[j].length]
//                 if(answer === answers[i]){
//                     score[j]++
//                 }
//             }
//         }
    
//     const biggest = Math.max(...score)
    
//     const answer = [];
//     for(let i = 0 ; i < score.length; i++){
//         if(score[i] === biggest){
//             answer.push(i + 1)
//         }
//     }
//     return answer;
}