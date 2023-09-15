// 1584. Min Cost to Connect All Points

// You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

// The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

// Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

class UnionFind {
    constructor(size) {
        this.group = Array.from({ length: size }, (_, i) => i);
        this.rank = Array.from({ length: size }, () => 0);
    }

    find(x) {
        if (this.group[x] !== x) {
            this.group[x] = this.find(this.group[x]);
        }
        return this.group[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX === rootY) return false;

        if (this.rank[rootX] > this.rank[rootY]) {
            this.group[rootY] = rootX;
        } else if (this.rank[rootX] < this.group[rootY]) {
            this.group[rootX] = rootY;
        } else {
            this.group[rootX] = rootY;
            this.rank[rootY] += 1;
        }
        return true;
    }
}

var minCostConnectPoints = function (points) {
    const m = points.length;

    const allEdges = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            const weight =
                j !== i
                    ? Math.abs(points[i][0] - points[j][0]) +
                      Math.abs(points[i][1] - points[j][1])
                    : 0;
            weight !== 0 ? allEdges.push([weight, i, j]) : null;
        }
    }
    allEdges.sort((a, b) => a[0] - b[0]);

    let answer = 0,
        edgeUsed = 0;

    const uf = new UnionFind(allEdges.length);
    for (let i = 0; i < allEdges.length && edgeUsed < m - 1; i++) {
        let [weight, node1, node2] = allEdges[i];

        if (uf.union(node1, node2)) {
            answer += weight;
            edgeUsed += 1;
        }
    }

    return answer;
};
