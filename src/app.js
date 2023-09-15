class UnionFind {
    constructor(size) {
        this.group = Array.from({ length: size }, (_, i) => i);
    }

    find(node) {
        if (this.group[node] !== node) this.find(this.group[node]);
        return this.group[node];
    }

    union(node1, node2) {
        const rootX = this.find(node1);
        const rootY = this.find(node2);

        if (rootX === rootY) return false;
    }
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {};
