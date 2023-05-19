var isBipartite = function (graph: number[][]) {
    const color = new Map()
    const stack: number[] = []

    for (let i = 0; i < graph.length; i++) {
        if (color.has(i)) continue

        color.set(i, true)
        stack.push(i)

        while (stack.length) {
            const curr = stack.shift()!
            for (const neighbor of graph[curr]) {
                if (!color.has(neighbor)) {
                    stack.push(neighbor)
                    color.set(neighbor, !color.get(curr))
                } else if (color.get(curr) === color.get(neighbor)) {
                    return false
                }
            }
        }
    }

    return true
}

isBipartite([
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
])
