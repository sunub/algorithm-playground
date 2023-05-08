var makeConnected = function (n: number, connections: number[][]) {
    const networks = connections.length
    if (networks < n - 1) {
        return -1
    }
    const adjList = setAdjList(connections, n)
    let disconnectNum = 0
    const visit: Set<number> = new Set()
    for (let i = 0; i < n; i++) {
        if (!visit.has(i)) {
            disconnectNum += 1
            findDisconnection(i, adjList, visit)
        }
    }

    return disconnectNum - 1
}

function setAdjList(c: number[][], n: number) {
    const adjList: number[][] = Array(n).fill([])

    for (let i = 0; i < c.length; i++) {
        adjList[c[i][0]] = [...adjList[c[i][0]], c[i][1]]
        adjList[c[i][1]] = [...adjList[c[i][1]], c[i][0]]
    }

    return adjList
}

function findDisconnection(node: number, adj: number[][], visit: Set<number>) {
    visit.add(node)
    for (let neighbor of adj[node]) {
        if (!visit.has(neighbor)) {
            findDisconnection(neighbor, adj, visit)
        }
    }
}
