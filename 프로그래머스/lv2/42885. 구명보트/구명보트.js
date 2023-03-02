function solution(people, limit) {
    people.sort((a,b) => b - a)
     let last = people.length - 1
    return people.reduce((acc,cur,i) =>{
        if( i <= last ){
        const weight = limit - cur
        if( weight >= people[ last ] ) last--;
        acc++;
        }
        return acc
    },0)
//   let answer = 0, last = people.length -1 ;
//   people.sort((a,b) => b - a)
//   for(let i = 0; i < people.length; i++){
//     const weight = limit - people[i]
    
//     if( weight >= people[ last ] ) last --
//     answer ++
    
//     if( i >= last ) return answer;
//     // if( !people[i] ) continue;
//     // boat.push(people[i])
//     // people[i] = null
    
//     // const weight = limit - boat[0];
//     // const idx = people.includes(weight) 
//     // ? people.indexOf(weight) 
//     // : people.findIndex((el)=> el !== null && el < weight)
    
//     // if( idx !== -1) people[ idx ] = null;
//     // answer ++;
//     // boat = []
//   }
//   return answer
}