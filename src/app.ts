class Union {
    disjoint: number[]
    group: number
    constructor(n: number) {
        this.disjoint = Array.from({ length: n }, (v, i) => (v = i))
        this.group = n
    }

    find(index: number) {
        if (this.disjoint[index] === index) return index
        this.disjoint[index] = this.find(this.disjoint[index])
        return this.disjoint[index]
    }

    quick(x: number, y: number) {
        const rootX = this.find(x)
        const rootY = this.find(y)

        if (rootX !== rootY) {
            this.disjoint[rootY] = rootX
            this.group -= 1
        }
    }
}

const u = new Union(5)
u.find(2)
