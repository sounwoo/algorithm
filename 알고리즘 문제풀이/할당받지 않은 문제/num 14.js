// 14. 

// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, 
// solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.



function solution(arr, divisor) {
    var answer = [];

    for(let i in arr){// "[5, 9, 7, 10]","5"
        if(arr[i] % divisor == 0){ // arr[i] = ("5" , "9" , "7" , "10") % 5
            answer.push(arr[i]); // answer.push = "5" , "10"
        }   
    }
    if(answer.length == 0 ) {   // arr[i] = ("3" , "2" , "6") % 10 = x
        answer.push(-1);        // answer.push = -1
    
    }
    answer.sort((a,b) => (a - b)); // sort()오름 차순 정렬

    return answer;
}

console.log(solution([5, 9, 7, 10],5))
console.log(solution([2, 36, 1, 3],1))
console.log(solution([3,2,6],10))
