function solution(arr) {
    var answer = 0;
    // for(let i = 0; i < arr.length; i++){
    //     answer += arr[i];
    // }
    answer = arr.reduce((a,b)=> a + b) / arr.length
    return answer
}