class QuickUnion {
    root: number[]
    constructor(size: number) {
        this.root = Array.from({ length: size }, (_, i) => i + 1)
    }

    find(n: number) {
        while (n !== this.root[n]) {
            n = this.root[n]
        }
        return n
    }

    union(x: number, y: number) {
        let rootX = this.find(x)
        let rootY = this.find(y)
        if (rootX !== rootY) {
            this.root[rootY] = rootX
        }
    }

    connected(x: number, y: number) {
        return this.find(x) === this.find(y)
    }
}
