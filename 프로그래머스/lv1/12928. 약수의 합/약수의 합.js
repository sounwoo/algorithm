function solution(n) {
    // let sum = n; 
    // // 자신을 제외한 모든 약수 합
    // for (let i = 1; i <= n / 2; i++) { // 절반 이상부터는 약수가 될수 없다
    //     if (n % i === 0) { // 약수인지 판별
    //         sum += i;
    //     }
    // }
    
    // new Array로 n만큼 새로운 배열을 만든다(fill로 실제 데이터 넣기)
    const answer = new Array(n).fill(1).reduce((acc,cur, i)=>{ 
        // 누적값과 인덱스 더하기 (0+1)
        const num  = cur + i
        
        // 현재값 + (약수라면 +누적값),(아니라면 +0)
        return acc + (n % num === 0 ? num : 0) 
        
    },0) 
    console.log(answer)
    
    
    
    return answer;
}