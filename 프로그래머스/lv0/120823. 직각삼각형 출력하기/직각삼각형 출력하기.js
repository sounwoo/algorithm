const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
//     const a = Number(input[0]), b = Number(input[1]);
//     const row = '*'.repeat(a) // a만큼 repeat반복 해서 * 붙여주기

//     for(let i in a){ // b반큼 반복
//         console.log(i)
//     }
    
    const num = Number(input[0]);
    let logStr = ''
    for(let i = 0 ; i < num; i++) {
        for(let j = 0 ; j <= i; j++) {
            logStr+='*'
        }
        logStr+='\n'
    }
    console.log(logStr)
    // console.log(input);
});