function solution(todo_list, finished) {
    return todo_list.filter((el,i) => {
        if(!finished[i]) return el
    })
}