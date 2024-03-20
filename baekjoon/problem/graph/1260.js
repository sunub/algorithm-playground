const fs = require('fs');
const path = require('path');

const submitPath = '/dev/stdin';
const localPath = path.join(process.cwd(), '/baekjoon/example.txt');

const input = fs.readFileSync(localPath).toString().split('\n');

const [N, M, V] = input[0].split(' ');
const adj = new Map();

for (let i = 1; i < input.length; i++) {
    const [u, v] = input[i].split(' ').map(Number);
    adj.has(u) ? adj.set(u, [...adj.get(u), v]) : adj.set(u, [v]);
    adj.has(v) ? adj.set(v, [...adj.get(v), u]) : adj.set(v, [u]);
}

const startPoint = Number(V);

for (const key of adj.keys()) {
    const sortedArray = [...adj.get(key)].sort();
    adj.set(key, sortedArray);
}

const answer_dfs = [];
const answer_bfs = [];
function dfs(start) {
    answer_dfs.push(start);
    let queue = [...adj.get(start)];
    const visit = new Set([start]);

    while (queue.length) {
        const curr = queue.shift();

        if (visit.has(curr)) continue;
        visit.add(curr);
        answer_dfs.push(curr);

        if (!adj.has(curr)) continue;
        const nextPoints = adj.get(curr).filter((v) => !visit.has(v));
        if (!nextPoints.length) continue;

        queue = [...nextPoints, ...queue];
    }
}

function bfs(start) {
    answer_bfs.push(start);
    let queue = [...adj.get(start).sort()];
    const visit = new Set([start]);

    while (queue.length) {
        const curr = queue.shift();

        if (visit.has(curr)) continue;
        visit.add(curr);
        answer_bfs.push(curr);

        if (!adj.has(curr)) continue;
        const nextPoints = adj.get(curr).filter((v) => !visit.has(v));
        if (!nextPoints.length) continue;

        queue = [...queue, ...nextPoints];
    }
}

dfs(startPoint);
console.log(answer_dfs.join(' '));
bfs(startPoint);
console.log(answer_bfs.join(' '));
