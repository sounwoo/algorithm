function solution(n, m) {
    // 유클리드 호제법
    // - 최대공약수를 구하기 위한 알고리즘 (공식)

    // 1. a를 b 로 나누었을 때 (a > b, 큰 수를 더 작은 수로 나누었을때)
    // 2. 나머지 값을 c
    // 3. c === 0라면,b가 최대공약수
    // 4. c !== 0이라면 , b % c (1번 과정 반복)
    
    let a = Math.max(n,m), b = Math.min(n,m), c = 0;
    
    while(a % b > 0){
        c =  a % b
        a = b;
        b = c;
    }
    // 최소공배수 : n과 m을 곱한 값을 최대공약수로 나눠준 값
    return [b, (n*m) / b]
    
//     // 최대약배수
//     let max = 0; // 공약수 중에서 가장 큰 값
//     for(let i = 1; i<=m; i++){
//         if(n % i ===0 && m % i === 0){
//             max = i;
//         }
//     }
    
//     // 최소공배수
//     let min = 0; // 공배수 중에서 가장 작은 값
//     for(let i = m; i<= n * m; i += m){
//         if(i % n === 0){
//             min = i
//             break;
//         }
//     }
//     return [max,min]
}