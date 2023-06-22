function solution(myString, pat) {
    const temp = myString.lastIndexOf(pat) + pat.length
    return myString.slice(0,temp)
}