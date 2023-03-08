function solution(t, p) {
//     let temp = [t.slice(0, 0 + p.length)];
//     let idx = 1;
//     while( true ){
//         let wordLeng = t.slice(idx,idx + p.length)
//         if(wordLeng.length !== p.length) break;
//         temp.push(wordLeng)
//         idx++
//     }
//     return temp.sort((a,b) => a - b).filter((el) => el <= p).length
    
    let temp = 0;
    let idx = 0;
    while( true ){
        let wordLeng = t.slice(idx,idx + p.length)
        if(wordLeng.length !== p.length) break;
        if(+wordLeng <= +p) temp++
        idx++
    }
    return temp
}    