function solution(absolutes, signs) {
    return absolutes.reduce((acc,cur,i)=>{
        return acc +(signs[i] ? cur : -cur);
    },0)
    
    
    
    // let answer = 0;
    // for (let i = 0; i < absolutes.length; i++) {
    //     answer += signs[i] ? absolutes[i] : -absolutes[i];
    // }
    // return answer
}