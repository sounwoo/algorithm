let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
function solution(s) {
    for(let i = 0; i < numbers.length; i++) {
        s = s.replaceAll(numbers[i], i)
    }
    
    // numbers.forEach((num, i) => {
    //   s = s.split(num).join(i)
    // })
    
    // for(let i = 0; i < numbers.length; i++){
    //     const regExp = new RegExp(numbers[i], "g")
    //     s = s.replace(regExp,i)
    // }
    
  return Number(s)
}