let count = 0;
const limit = 100;

for (let i = 1; i < limit; i = i++) {
    count++;
}
console.log(count);

console.log(Math.floor(limit / 2));

// 1층에서 100층 까지 도달할때
// 한번에 최대 2층, 1층 올라갈수 있다.
// 이때, 100층까지 도달하는 가장작은 횟수를 구하시오.
