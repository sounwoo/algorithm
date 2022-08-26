let A;
let B = [];
for (let n = 0; n < 10000; n++) {
    if (n < 10) {
        A = 2 * n;
    } else if (n < 100) {
        A = n + Math.floor(n / 10) + (n % 10);
    } else if (n < 1000) {
        A = n + Math.floor(n / 100) + Math.floor((n % 100) / 10) + (n % 10);
    } else if (n < 10000) {
        A =
            n +
            Math.floor(n / 1000) +
            Math.floor((n % 1000) / 100) +
            Math.floor((n % 100) / 10) +
            (n % 10);
    } else {
        A = 10001;
    }
    B.push(A);
}
for (let i = 1; i <= 10000; i++) {
    if (!B.includes(i)) {
        console.log(i);
    }
}
