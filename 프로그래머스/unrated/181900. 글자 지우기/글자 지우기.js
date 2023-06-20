function solution(my_string, indices) {
    my_string = my_string.split("");
    return indices.reduce((acc,cur) => {
        acc[cur] = ""
        return acc
    },my_string).join("")
    // return my_string.join("")
}