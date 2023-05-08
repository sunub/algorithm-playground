var maxNumEdgesToRemove = function (n: number, edges: number[][]) {
    const alice = new UnionFind(n)
    const bob = new UnionFind(n)

    let needToConnect = 0

    for (let [type, u, v] of edges) {
        if (type === 3 && alice.union(u, v) && bob.union(u, v)) {
            needToConnect += 1
        }
    }

    for (let [type, u, v] of edges) {
        if (type === 1 && alice.union(u, v)) needToConnect += 1
        if (type === 2 && bob.union(u, v)) needToConnect += 1
    }

    if (alice.group === 1 && bob.group === 1)
        return edges.length - needToConnect
    else return -1
}

class UnionFind {
    parent: number[]
    group: number
    constructor(size: number) {
        this.parent = Array.from({ length: size }, (_, i) => i)
        this.group = size
    }

    find(x: number) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x])
        }
        return this.parent[x]
    }

    union(x: number, y: number) {
        const rootX = this.find(x)
        const rootY = this.find(y)
        if (rootX === rootY) return false
        else {
            this.parent[y] = x
            this.group--
            return true
        }
    }
}

maxNumEdgesToRemove(4, [
    [3, 1, 2],
    [3, 2, 3],
    [1, 1, 3],
    [1, 2, 4],
    [1, 1, 2],
    [2, 3, 4],
])
