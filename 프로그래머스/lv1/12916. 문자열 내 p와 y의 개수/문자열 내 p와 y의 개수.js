function solution(s){
    const check ={}; // 알파벳의 개수를 정리하는 패턴

    // str이 없다면 1을 넣고 str이 있다면 +1
    const answer = s.toLowerCase().split("").forEach((str)=>{
        check[str] === undefined ? check[str] = 1 : check[str] +=1
        
    })
    return check["p"] === check["y"]

    
    

    // let p = 0 , y = 0;
    // s.toLowerCase()
    // for(let i in s){
    //     if (s[i] === "p"){
    //         p++;
    //     }
    //     else if(s[i] === "y"){
    //         y++;
    //     }    
    // }
    // return  p === y
   
}