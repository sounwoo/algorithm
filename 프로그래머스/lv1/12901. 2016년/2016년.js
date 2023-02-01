const month = {
    1 : 31,
    2 : 29,
    3 : 31,
    4 : 30,
    5 : 31,
    6 : 30,
    7 : 31,
    8 : 31,
    9 : 30,
    10 : 31,
    11 : 30,
    12 : 31
}

const weekDay = ['FRI','SAT','SUN','MON','TUE','WED','THU'];

function solution(a, b) {
    // const days = new Array(a).fill(1).reduce((acc,cur,i)=>{
    //     const monthNum = cur + i;
    //     return acc + (monthNum !== a? month[monthNum]: b-1)
    // },0)
    // return weekDay[days%7]
    
    
//     let answer = 0;
    
//     for(let i = 1; i < a; i++){
//         answer += month[i]
//     }
//     answer += (b - 1)
//     return weekDay[answer % 7]
    
    // const week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    // const days = new Date(`2016-${a}-${b}`).getDay()
    // return week[days]
    
    return new Date(`2016-${a}-${b}`).toString().slice(0,3).toUpperCase();
}