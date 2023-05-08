class QuickFind {
    root: number[]
    constructor(size: number) {
        this.root = Array.from({ length: size }, (_, i) => i + 1)
    }

    find(n: number) {
        return this.root[n]
    }

    union(x: number, y: number) {
        let rootX = this.find(x)
        let rootY = this.find(y)
        if (rootX !== rootY) {
            for (let i = 0; i < this.root.length; i++) {
                if (this.root[i] === rootY) {
                    this.root[i] = rootX
                }
            }
        }
    }

    connected(x: number, y: number) {
        return this.find(x) === this.find(y)
    }
}
