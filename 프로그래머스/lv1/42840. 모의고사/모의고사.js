function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var num1 = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var num2 = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var num3 = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(num1,num2,num3);
    let score = [num1,num2,num3]
     for(let i =0 ; i <score.length; i++){
    if(score[i] === max){
      answer.push(i +1)
    }
  }

    return answer;
}
