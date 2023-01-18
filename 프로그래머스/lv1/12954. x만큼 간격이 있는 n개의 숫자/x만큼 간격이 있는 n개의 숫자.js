function solution(x, n) {
    var answer = new Array(n).fill(1).map((num, i) => {return (num + i) * x});
    // cosnt answer = []     
    //  for(let i = 1; i <= n; i++){
    //      answer.push(x*i);
    //  }
    return answer;
}