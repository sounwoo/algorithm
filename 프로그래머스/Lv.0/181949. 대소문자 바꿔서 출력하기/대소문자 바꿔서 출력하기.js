const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let word = ''
    input[0].split('').forEach(el => 
        word += el === el.toUpperCase() ? el.toLowerCase(): el.toUpperCase())
    console.log(word)
});