const numLogObj = {
    "1" : "w",
    "-1" : "s",
    "10" : "d",
    "-10" : "a",
}

function solution(numLog) {
    return numLog.map((el,i) =>numLogObj[numLog[i+1] - el]).join("")
}