const fs = require('fs');
const path = require('path');

const submitPath = '/dev/stdin';
const localPath = path.join(process.cwd(), '/baekjoon/example.txt');

const input = fs.readFileSync(submitPath).toString().split('\n');

const n = Number(input.shift());
let MAX_NUM = -Infinity;
const land = input.map((row) =>
    row.split(' ').map((n) => {
        const num = Number(n);
        MAX_NUM = Math.max(MAX_NUM, num);
        return num;
    })
);

const DIR = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

let SAFE_AREA_COUNT = -Infinity;
for (let limit = 1; limit <= MAX_NUM; limit++) {
    let count = 0;
    const visit = new Set();

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let key = `${i},${j}`;
            if (land[i][j] >= limit && !visit.has(key)) {
                bfs(j, i, visit, limit);
                count += 1;
            }
        }
    }
    SAFE_AREA_COUNT = Math.max(SAFE_AREA_COUNT, count);
}

console.log(SAFE_AREA_COUNT);

function bfs(x, y, visit, target) {
    const queue = [[x, y]];

    while (queue.length) {
        const [cx, cy] = queue.pop();
        const key = `${cy},${cx}`;

        if (visit.has(key)) continue;
        visit.add(key);

        for (const [dx, dy] of DIR) {
            const nx = cx + dx;
            const ny = cy + dy;
            if (checkValidRange(nx, ny)) continue;

            const nextNode = land[ny][nx];
            if (nextNode >= target) {
                queue.push([nx, ny]);
            }
        }
    }
}

function checkValidRange(x, y) {
    return x < 0 || x >= n || y < 0 || y >= n;
}
