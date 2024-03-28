const fs = require('fs');
const path = require('path');

const submitPath = '/dev/stdin';
const localPath = path.join(process.cwd(), '/baekjoon/example.txt');

// const input = fs.readFileSync(localPath).toString().split(' ').map(Number);
const input = fs.readFileSync(submitPath).toString().split('\n');
const [N, M, K] = input.shift().split(' ').map(Number);

const arr = [];
arr.push(0);
for (let i = 0; i < N; i++) {
    arr.push(BigInt(input.shift()));
}

const commands = [];
while (input.length) {
    commands.push(input.shift().split(' ').map(Number));
}

const segTree = new Array(N * 4).fill(BigInt(0));

function getVal(ptr, s, e, l, r) {
    if (s > r || e < l) return BigInt(0);

    if (l <= s && e <= r) {
        return BigInt(segTree[ptr]);
    }

    const mid = Math.floor((s + e) / 2);
    return (
        getVal(ptr * 2, s, mid, l, r) + getVal(ptr * 2 + 1, mid + 1, e, l, r)
    );
}

function update(ptr, s, e, i, val) {
    if (s > i || e < i) return;

    if (s === e) {
        segTree[ptr] = val;
        return val;
    }

    const mid = Math.floor((s + e) / 2);
    update(ptr * 2, s, mid, i, val);
    update(ptr * 2 + 1, mid + 1, e, i, val);

    segTree[ptr] = segTree[ptr * 2] + segTree[ptr * 2 + 1];
}

for (let i = 1; i <= N; i++) {
    update(1, 1, N, i, BigInt(arr[i]));
}

for (const command of commands) {
    const [a, b, c] = command;

    if (a === 1) {
        update(1, 1, N, b, BigInt(c));
    } else if (a === 2) {
        const result = getVal(1, 1, N, b, c);
        console.log(result);
    }
}
