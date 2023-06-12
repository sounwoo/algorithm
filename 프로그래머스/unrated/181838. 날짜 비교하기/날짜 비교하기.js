function solution(date1, date2) {
     let temp = [new Date(date1.join("-")), new Date(date2.join("-"))]
     
     return temp[0] < temp[1] ? 1: 0
}