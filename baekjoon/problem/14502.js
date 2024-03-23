function solution() {}

const fs = require('fs');
const path = require('path');
const { constrainedMemory } = require('process');

const submitPath = '/dev/stdin';
const localPath = path.join(process.cwd(), '/baekjoon/example.txt');

const input = fs.readFileSync(localPath).toString().split('\n');

const [N, M] = input.shift().trim().split(' ').map(Number);

const cave = [];
for (let i = 0; i < N; i++) {
    cave.push(input.shift().trim().split(' ').map(Number));
}

let [playerHp, playerAttk, bossHp, bossAttk] = input
    .shift()
    .trim()
    .split(' ')
    .map(Number);

const DIR = {
    U: [-1, 0],
    D: [1, 0],
    R: [0, 1],
    L: [0, -1],
};

const caveInfo = new Map();
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        const info = cave[i][j];
        if (info === 1) {
            cave[i][j] = '#';
            caveInfo.has('wall')
                ? caveInfo.set('wall', [...caveInfo.get('wall'), [i, j]])
                : caveInfo.set('wall', [[i, j]]);
        } else if (info === 2) {
            caveInfo.set('player', [i, j]);
        } else if (info === 3) {
            caveInfo.set('boss', [i, j]);
        }
    }
}

const answer = solution();
console.log(answer);

function solution() {
    const [playerY, playerX] = caveInfo.get('player');
    const [bossY, bossX] = caveInfo.get('boss');
    let bossDir = '';
    if (playerY === bossY && playerX - bossX > 0) {
        bossDir = 'R';
    } else if (playerY === bossY && playerX - bossX < 0) {
        bossDir = 'L';
    } else if (playerX === bossX && playerY - bossY > 0) {
        bossDir = 'D';
    } else if (playerX === bossX && playerY - bossY < 0) {
        bossDir = 'U';
    }
    let playerDir = bossDir;

    while (playerHp > 0 && bossHp > 0) {
        bossHp -= playerAttk;
        if (bossHp <= 0) {
            return 'VICTORY!';
        }
        playerMoveTurn(caveInfo.get('player'));
        const [enemyX, enemyY] = bossAttkTurn();
        const bossDamage = enemyAttkPlayer(enemyX, enemyY);
        playerHp -= bossAttk - bossDamage === -1 ? 0 : bossDamage;
        if (playerHp <= 0) {
            return 'CAVELIFE...';
        }
        bossMoveTurn();
    }

    function bossMoveTurn() {
        const [playerY, playerX] = caveInfo.get('player');
        let [bossY, bossX] = caveInfo.get('boss');

        const diffX = Math.abs(playerX - bossX);
        const diffY = Math.abs(playerY - bossY);
        if (diffX > 1 || diffY > 1 || (diffX === 1 && diffY === 1)) {
            const [dy, dx] = DIR[bossDir];
            caveInfo.set('boss', [bossY + dy, bossX + dx]);
            bossDir = playerDir;
        }
    }

    // 다익스트라 알고리즘
    function enemyAttkPlayer(enemyX, enemyY) {
        const copyCave = Array.from(cave);
        const y = [1, -1, 0, 0];
        const x = [0, 0, 1, -1];
        const pq = new PriorityQueue((a, b) => a[2] - b[2]);

        pq.enqueue([enemyX, enemyY, 0]);
        const visit = new Set();
        while (pq.length) {
            const [cx, cy, weight] = pq.dequeue();

            if (copyCave[cy][cx] === 2) {
                return weight;
            }

            for (let i = 0; i < 4; i++) {
                const nx = cx + x[i];
                const ny = cy + y[i];

                if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
                const key = `${nx},${ny}`;
                if (
                    visit.has(key) ||
                    copyCave[ny][nx] === 3 ||
                    copyCave[ny][nx] === '#'
                )
                    continue;
                pq.enqueue([nx, ny, weight + 1]);
                visit.add(key);
            }
        }

        return -1;
    }

    function bossAttkTurn() {
        let tmpBossDir = bossDir;
        let [x, y] = caveInfo.get('boss');
        const limit = Math.max(N, M);

        let end = 1;
        while (end < limit) {
            for (let i = 0; i < 2; i++) {
                for (let i = 0; i < end; i++) {
                    const [dy, dx] = DIR[tmpBossDir];
                    const nx = x + dx;
                    const ny = y + dy;

                    if (nx >= 0 || nx < M || ny >= 0 || ny < N) {
                        (x = nx), (y = ny);
                        if (cave[ny][nx] === '#') return [nx, ny];
                    }
                }
                tmpBossDir = rotateDir(tmpBossDir);
            }
            end += 1;
        }
        return [-1, -1];
    }

    function playerMoveTurn(player) {
        const [y, x] = player;
        let [dy, dx] = DIR[playerDir];
        const [nx, ny] = playerMove(x + dx, y + dy, x, y, 0);
        caveInfo.set('player', [ny, nx]);
    }

    function playerMove(nx, ny, x, y, rotateCount) {
        if (!checkDirisValid(nx, ny)) {
            if (rotateCount === 4) return [x, y];
            switch (playerDir) {
                case 'U':
                    playerDir = 'R';
                    break;
                case 'R':
                    playerDir = 'D';
                    break;
                case 'D':
                    playerDir = 'L';
                    break;
                case 'L':
                    playerDir = 'U';
                    break;
            }
            const [dy, dx] = DIR[playerDir];
            nx = x + dx;
            ny = y + dy;
            playerHp -= 1;
            playerMove(nx, ny, x, y, rotateCount + 1);
        }
        return [nx, ny];
    }

    function checkDirisValid(nx, ny) {
        if (nx < 0 || nx >= M || ny < 0 || ny >= N) return false;
        if (cave[ny][nx] === 1 || cave[ny][nx] === 3) return false;

        return true;
    }

    function rotateDir(dir) {
        switch (dir) {
            case 'U':
                dir = 'R';
                break;
            case 'R':
                dir = 'D';
                break;
            case 'D':
                dir = 'L';
                break;
            case 'L':
                dir = 'U';
                break;
        }
        return dir;
    }
}

class PriorityQueue {
    constructor(comparator) {
        this.comparator = comparator;
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
        this.queue.sort(element);
    }

    dequeue() {
        this.queue.shift();
    }

    get length() {
        return this.queue.length;
    }
}
