function solution(food) {
    const answer = [0]
    for(let i = food.length; i > 0; i--){
        const temp = Math.floor(food[i] / 2)
        for(let j = 0; j < temp; j++){
            answer.push(i)
            answer.unshift(i)
        }
    }
    return answer.join('')
}