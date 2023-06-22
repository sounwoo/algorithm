function solution(myString, pat) {
    const temp = myString.lastIndexOf(pat)
    return myString.slice(0,temp+pat.length)
}