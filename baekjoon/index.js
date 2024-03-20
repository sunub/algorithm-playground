const fs = require('fs');
const path = require('path');
const { constrainedMemory } = require('process');

const submitPath = '/dev/stdin';
const localPath = path.join(process.cwd(), '/baekjoon/example.txt');

const input = fs.readFileSync(localPath).toString().split('\n');

const T = Number(input.shift());
const DIR = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
];

const answer = [];
for (let i = 0; i < T; i++) {
    // m 가로 n 세로
    const [M, N, K] = input.shift().split(' ').map(Number);

    let count = 0;
    const visit = new Set();
    const lands = Array.from({ length: N }, () =>
        Array.from({ length: M }, () => 0)
    );
    for (let i = 0; i < K; i++) {
        const [x, y] = input.shift().split(' ').map(Number);

        lands[y][x] = 1;
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            const key = `${i},${j}`;
            if (!visit.has(key) && lands[i][j] === 1) {
                bfs(j, i);
                count += 1;
            }
        }
    }

    answer.push(count);

    function bfs(x, y) {
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
                if (lands[ny][nx] !== 1) continue;

                queue.push([nx, ny]);
            }
        }
    }

    function checkValidRange(x, y) {
        return x < 0 || x >= M || y < 0 || y >= N;
    }
}

answer.forEach((num) => console.log(num));
