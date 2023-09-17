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

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
    let n = points.length;
    let allEdges = [];

    for (let currNode = 0; currNode < n; ++currNode) {
        for (let nextNode = currNode + 1; nextNode < n; ++nextNode) {
            let weight =
                Math.abs(points[currNode][0] - points[nextNode][0]) +
                Math.abs(points[currNode][1] - points[nextNode][1]);

            allEdges.push([weight, currNode, nextNode]);
        }
    }

    allEdges.sort((a, b) => a[0] - b[0]);

    // 여기서 union find를 사용한 이유는 연결되어 있는 모든 노드를 방문하기 위한 방법으로 사용된다. 각각의 노드들이 연결되어 있을 경우 연결되어 있는 노드들 간의 그룹을 만들어 관계를 표현하기 쉽고 또한 연결되어 있지 않고 분리되어 있는 노드 그룹을 찾는 것 또한 용이하다.
    let uf = new UnionFind(n);
    let mstCost = 0;
    let edgesUsed = 0;

    for (let i = 0; i < allEdges.length && edgesUsed < n - 1; i++) {
        let [weight, node1, node2] = allEdges[i];

        if (uf.union(node1, node2)) {
            mstCost += weight;
            edgesUsed++;
        }
    }
};

minCostConnectPoints([
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
]);
