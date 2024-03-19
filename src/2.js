class UnionFind {
    constructor(size) {
        this.group = Array.from({ length: size }, (_, i) => i);
        // 여기서 rank가 의미하는 것은 최상위 노드를 찾는 것이다. union method에서 두 개의 노드를 비교하여 어떠한 노드가 더 상위에 있는 노드인지 순위를 매긴다.
        this.rank = Array.from({ length: size }, () => 0);
    }

    // 그래프는 여러개의 노드가 연결되는 형태로 구성되어 있는데 이 경우에는 방향이 있는 그래프에 해당하는 방법이다. find(node)는 각 노드의 부모 노드를 찾아가는 방법이다. 이미 방문한 노드에는 연결되는 부모 노드를 저장하고 부모 노드의 값이 반환될 때까지 반복해서 찾는 것이다.

    /**
     *
     * @param {number} node
     * @returns {number}
     */
    find(node) {
        if (this.group[node] !== node)
            this.group[node] = this.find(this.group[node]);
        return this.group[node];
    }

    /**
     *
     * @param {number} node1
     * @param {number} node2
     * @returns {boolean}
     */
    union(node1, node2) {
        let group1 = this.find(node1);
        let group2 = this.find(node2);

        // group1 과 group2가 같다면 서로 같은 최상위 노드에 포함되는 노드라는 것을 알 수 있다. 이 경우 어떠한 값을 반환할지는 문제에 따라 다르게 판단하여야 한다.
        if (group1 === group2) return false;

        // 두 가지의 랭크를 비교하여 더 높은 랭크에 있는 노드에 값에 더 낮은 위치에 있는 포함시켜서 관계를 나타낸다.
        if (this.rank[group1] > this.rank[group2]) {
            this.group[group2] = group1;
        } else if (this.rank[group1] < this.rank[group2]) {
            this.group[group1] = group2;
        } else {
            this.group[group1] = group2;
            this.rank[group2] += 1;
        }

        return true;
    }
}

function solution(edges) {
    const adjList = new Map();
    const total = new Set();
    for (const [u, v] of edges) {
        total.add(u).add(v);
        adjList.has(u)
            ? adjList.set(u, [...adjList.get(u), v])
            : adjList.set(u, [v]);
    }

    const unionFind = new UnionFind(total.size);
    for (const u of [...adjList.keys()]) {
        const nodes = dfs(u, new Set());
    }

    function dfs(currNode, visit) {
        let nextNode;
        if (adjList.has(currNode)) {
            nextNode = adjList.get(currNode);
        } else {
            return visit;
        }

        for (const node of nextNode) {
            if (visit.has(node)) {
                return visit;
            } else {
                visit.add(node);
                dfs(node, visit);
            }
        }

        return visit;
    }
}

var calcEquation = function (equations, values, queries) {
    const uf = new UnionFind();

    for (let i = 0; i < equations.length; i += 1) {
        const [dividend, divisor] = equations[i];
        const quotient = values[i];

        uf.union(dividend, divisor, quotient);
    }

    const results = Array.from({ length: queries.length }, () => 0);
    for (let i = 0; i < queries.length; i += 1) {
        const [dividend, divisor] = queries[i];

        if (!uf.weight.has(dividend) || !uf.weight.has(divisor)) {
            results[i] = -1;
        } else {
            const dividendEntry = uf.find(dividend);
            const divisorEntry = uf.find(divisor);

            const dividendGid = dividendEntry.key;
            const divisorGid = divisorEntry.key;
            const dividendWeight = dividendEntry.value;
            const divisorWeight = divisorEntry.value;

            if (dividendGid !== divisorGid) {
                // case 2). 변수가 동일한 체인/그룹에 속하지 않는 경우
                results[i] = -1.0;
            } else {
                // case 3). 변수 간에 경로/체인이 존재하는 경우
                results[i] = dividendWeight / divisorWeight;
            }
        }
    }

    return results;
};

class UnionFind {
    constructor() {
        this.weight = new Map();
    }

    find(node) {
        if (!this.weight.has(node)) {
            this.weight.set(node, {
                key: node,
                value: 1,
            });
        }

        const entry = this.weight.get(node);
        if (entry.key !== node) {
            const newEntry = this.find(entry.key);
            this.weight.set(node, {
                key: newEntry.key,
                value: newEntry.value * entry.value,
            });
        }

        return this.weight.get(node);
    }

    union(dividend, divisor, value) {
        const dividendEntry = this.find(dividend);
        const divisorEntry = this.find(divisor);

        const dividendGid = dividendEntry.key;
        const divisorGid = divisorEntry.key;
        const dividendWeight = dividendEntry.value;
        const divisorWeight = divisorEntry.value;

        if (dividendGid !== divisorGid) {
            const newWeight = (divisorWeight * value) / dividendWeight;
            for (const [key, entry] of this.weight.entries()) {
                if (entry.key === dividendGid) {
                    this.weight.set(key, {
                        key: divisorGid,
                        value: entry.value * newWeight,
                    });
                }
            }
            this.weight.set(dividendGid, {
                key: divisorGid,
                value: newWeight,
            });
        }
    }
}

const equations = [
        ["a", "b"],
        ["b", "c"],
    ],
    values = [2.0, 3.0],
    queries = [
        ["a", "c"],
        ["b", "a"],
        ["a", "e"],
        ["a", "a"],
        ["x", "x"],
    ];

console.log(calcEquation(equations, values, queries));
