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
