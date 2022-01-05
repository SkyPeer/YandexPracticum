// Slide fastener task

const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function solve() {
    const n = Number(_inputLines[0]);
    var arr1 = _inputLines[1].trim(" ").split(" ").map(num => Number(num));
    var arr2 = _inputLines[2].trim(" ").split(" ").map(num => Number(num));
    var result = [];

    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
        result.push(arr2[i]);
    }

    process.stdout.write(`${result.join(' ')}`);
}