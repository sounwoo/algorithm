function solution(participant, completion) {
    participant.sort();
    completion.sort();

    const answer = participant.filter((name,i) =>{
        return name !== completion[i]
    })
    return answer[0]
    
    // for (let i = 0; participant.length; i++) {
    //     if (participant[i] !== completion[i]) return participant[i];
    // }
    
    
//    hash
//    const answer= {}
   
//    for (let i = 0; i <participant.length; i++) {
//        !answer[ participant[i] ] ? answer[participant[i]] = 1 : answer[participant[i]] ++
//    }
//     for(let i =0; i < completion.length; i++){
//         answer[completion[i]]--
//     }
//     for(let key in answer ){
//         if(answer[key]) return key
//     }
}