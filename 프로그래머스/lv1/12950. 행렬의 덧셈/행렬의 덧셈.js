function solution(arr1, arr2) {
    return arr1.map((numArr, i) =>{
        return numArr.map((num, j ) => {
            return num + arr2[i][j]
        })  
    })
    
//     var answer = [];
//     for(let i=0; i<arr1.length; i++) {
//         for(let j=0; j<arr1[i].length; j++) {
//             const sum = arr1[i][j]+arr2[i][j]
//             if(!answer[i]){
//                 answer[i] = [];
//             }
//             answer[i][j] = sum
//         }
    
//     }
//     return answer;

}