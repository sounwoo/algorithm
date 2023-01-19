function solution(arr, divisor) {
    let answer = arr.filter((el)=>{
        return el % divisor === 0
    })
    return answer.length === 0 ? [-1] : answer.sort((a,b) => a - b)
    
    // var answer = [];
    // for(let i in arr){// "[5, 9, 7, 10]","5"
    //     if(arr[i] % divisor == 0){ // arr[i] = ("5" , "9" , "7" , "10") % 5
    //         answer.push(arr[i]); // answer.push = "5" , "10"
    //     }   
    // }
    // arr[i] = ("3" , "2" , "6") % 10 = x
    // answer.push = -1
    // return answer.length === 0 ? [-1] : answer.sort((a,b) => a - b)   // sort()오름 차순 정렬
        
}