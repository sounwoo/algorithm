function solution(s) {
    const answer = s.split(" ").map((word)=>{
        return word.split("").map((letter,index)=>{
            return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
        }).join("")
    }).join(" ")
    
    
    
//     let answer = '';
//     let idx = 0;
//     for(let i = 0 ; i < s.length; i++){
//        if(s[i] === " "){
//            answer += " "
//            idx = 0;
//         }else{
//             answer += idx % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase()
//             idx++;
//         }
        
//     }
    
    return answer;
}