// 547. Number of Provinces

// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

/**
 * @argument { Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]] }
 * @returns { Output: 2 }
 */

function findCircleNum(isConnected: number[][]): number {
    const union = new Union(isConnected.length)

    for (let i = 0; i < isConnected.length; i++) {
        for (let j = 0; j < isConnected[i].length; j++) {
            if (isConnected[i][j]) {
                union.quick(i, i)
            }
        }
    }

    return union.group
}

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
