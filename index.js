const DIR = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
/**
 *
 * @param {number[][]} land
 */
function solution(land) {
    const m = land.length;
    const n = land[0].length;
    const groups = new Map();
    let result = -Infinity;

    for (let i = 0; i < n; i++) {
        let maxOilCost = 0;

        for (const key of groups.keys()) {
            const { cost, used } = groups.get(key);
            groups.set(key, { cost, used: false });
        }

        for (let j = 0; j < m; j++) {
            let key = `${j},${i}`;
            const visit = new Set();

            if (land[j][i] === 0) continue;
            const foundedKey = findGroup(key);
            if (foundedKey) {
                const { cost, used } = groups.get(foundedKey);
                maxOilCost += used ? 0 : cost;
                continue;
            }

            const oilCost = bfs(j, i, visit);
            maxOilCost += oilCost;
            groups.set(visit, { cost: oilCost, used: true });
        }
        result = Math.max(result, maxOilCost);
    }

    return result;

    function findGroup(key) {
        for (const group of groups.keys()) {
            if (group.has(key)) return group;
        }
        return false;
    }

    function bfs(x, y, visit) {
        let queue = [[x, y]];
        let result = 0;

        while (queue.length) {
            const [cx, cy] = queue.pop();

            for (const [dx, dy] of DIR) {
                const nx = cx + dx,
                    ny = cy + dy;
                const key = `${nx},${ny}`;

                if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
                if (land[nx][ny] === 0 || visit.has(key)) continue;

                visit.add(key);
                queue.push([nx, ny]);
                result += 1;
            }
        }

        result = result === 0 ? 1 : result;
        return result;
    }
}

console.log(
    solution([
        [0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 0],
        [1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 1, 1],
    ])
);
