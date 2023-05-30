function solution(arr) {
    let result = 1
    arr.forEach((a,i)=>a.forEach((b,j)=>{
        if (arr[j][i] !== arr[i][j]) result = 0
    }))
    return result 
    // for(let i = 0 ; i < arr.length; i++){
    //     for(let j = 0 ; j < arr[i].length; j++){
    //         if(arr[i][j] !== arr[j][i]) return 0
    //     }
    // }
    // return 1
}