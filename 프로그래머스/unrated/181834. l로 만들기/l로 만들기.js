function solution(myString) {
    return [...myString].reduce((acc, cur) => acc + (cur.charCodeAt() < 108 ? "l" : cur), '')
//     return [...myString].map((el) => el.charCodeAt() < 108 ? "l": el).join('')
}
