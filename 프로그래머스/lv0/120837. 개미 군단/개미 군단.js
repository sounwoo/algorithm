function solution(hp) {
    let count = Math.floor(hp / 5)
  hp = hp - Math.floor(hp / 5) * 5
  count += Math.floor(hp / 3)
   hp = hp - Math.floor(hp / 3) * 3
  count += Math.floor(hp / 1)
   hp = hp - Math.floor(hp / 1) * 1
  return count
}