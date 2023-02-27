function solution(hp) {
   let count = Math.floor(hp / 5)
  hp = hp % 5
  count += Math.floor(hp / 3)
   hp = hp % 3
  count += Math.floor(hp / 1)
   hp = hp % 1
  return count
}