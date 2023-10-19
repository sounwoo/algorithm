const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');
const alphabet = {
    a: 1n,
    b: 2n,
    c: 3n,
    d: 4n,
    e: 5n,
    f: 6n,
    g: 7n,
    h: 8n,
    i: 9n,
    j: 10n,
    k: 11n,
    l: 12n,
    m: 13n,
    n: 14n,
    o: 15n,
    p: 16n,
    q: 17n,
    r: 18n,
    s: 19n,
    t: 20n,
    u: 21n,
    v: 22n,
    w: 23n,
    x: 24n,
    y: 25n,
    z: 26n,
};
function solution() {
    let result = 0n;
    const [L, arr] = input;
    arr.split('').forEach((el, idx) => {
        idx = BigInt(idx);
        result += alphabet[el] * 31n ** idx;
    });

    console.log(String(result % 1234567891n));
}

solution();
