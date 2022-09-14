const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replaceAll('\r', ''));

const [testCase, ...arr] = input;

for (let i = 0; i < testCase; i++) {
    let [N, M] = arr[i * 2].split(' ').map(Number);
    let queue = arr[i * 2 + 1].split(' ').map(Number);
    let count = 1;
    while (true) {
        let item = queue.shift();
        if (Math.max(...queue) <= item && M == 0) {
            console.log(count);
            break;
        } else if (Math.max(...queue) > item && M == 0) {
            queue.push(item);
            M = queue.length - 1;
        } else if (Math.max(...queue) > item) {
            queue.push(item);
            M -= 1;
        } else if (Math.max(...queue) <= item) {
            count += 1;
            M -= 1;
        }
    }
}
