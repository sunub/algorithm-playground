class UsingRankUnionFind {
    root: number[]
    rank: number[]
    constructor(size: number) {
        this.root = Array.from({ length: size }, (_, i) => i)
        this.rank = Array.from({ length: size }, (v) => (v = 1))
    }

    find(num: number) {
        if (this.root[num] !== num) {
            this.root[num] = this.find(this.root[num])
        }
        return this.root[num]
    }

    union(x: number, y: number) {
        let rootX = this.find(x)
        let rootY = this.find(y)
        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.root[rootY] = rootX
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.root[rootX] = rootY
            } else {
                this.root[rootY] = rootX
                this.rank[rootX] += 1
            }
        }
    }

    connected(x: number, y: number) {
        return this.find(x) === this.find(y)
    }
}
