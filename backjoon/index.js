function solution(input) {
    let answer = input.reduce((acc, curr) => acc * curr, 1);
    console.log(answer);
}

const readLine = require("readline");
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input;
rl.on("line", (line) => {
    input = oneLineCaseLine(line);
    rl.close();
}).on("close", () => {
    solution(input);
    process.exit();
});

function oneWordCaseLine(line) {
    return parseInt(line);
}

function oneLineCaseLine(line) {
    return line.split(" ").map((el) => parseInt(el));
}

function severalLineCaseLine(line) {
    return line
        .split("\n")
        .map((el) => el.split(" ").map((el2) => parseInt(el2)));
}
