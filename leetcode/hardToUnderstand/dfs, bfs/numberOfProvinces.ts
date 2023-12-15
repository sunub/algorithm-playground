class Union {
    disjonint: any[]
    group: number
    constructor(k: number) {
        this.disjonint = [...Array(k)].map((_, i) => i)
        this.group = k
    }

    find(index: number) {
        if (this.disjonint[index] == index) return index
        this.disjonint[index] = this.find(this.disjonint[index])
        return this.disjonint[index]
    }

    quick(x: number, y: number) {
        const rootX = this.find(x)
        const rootY = this.find(y)
        if (rootX !== rootY) {
            this.disjonint[rootY] = rootX
            this.group--
        }
    }
}

function findCircleNum(isConnected: number[][]) {
    const union = new Union(isConnected.length)
    for (let i = 0; i < isConnected.length; i++) {
        for (let j = 0; j < isConnected[0].length; j++) {
            if (isConnected[i][j]) {
                union.quick(i, j)
            }
        }
    }
    return union.group
}
