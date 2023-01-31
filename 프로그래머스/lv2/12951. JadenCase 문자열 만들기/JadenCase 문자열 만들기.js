function solution(s) {
    // 1.
    return s.toLowerCase().split(" ").map((str)=>{
        return str === "" ? str : str[0].toUpperCase() + str.slice(1);
    }).join(" ");
    
    
    // 2.     
    // let answer = "";
    // s = s.toLowerCase();
    // let idx = 0;
    // for(let i = 0; i < s.length; i++){
    //     let word = s[i]
    //     if(s[i] === " "){
    //         idx = 0;
    //     }else{
    //         if(idx === 0) {
    //             word = s[i].toUpperCase();
    //         }
    //         idx++
    //     }
    //     answer += word
    // }
    // return answer
    
    // 3.
    // let answer = []
    // s = s.toLowerCase().split(' ')
    // for(let i = 0 ; i <s.length; i++){
    //     answer.push(s[i][0].toUpperCase()+ s[i].slice(1))
    // }
    // return answer.join(" ")
}