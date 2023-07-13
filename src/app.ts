function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const map = new Map()

    for (let i = 0; i < prerequisites.length; i++) {
        const key = prerequisites[i][0]
        map.has(key)
            ? map.set(key, [...map.get(key), prerequisites[i][1]])
            : map.set(key, [prerequisites[i][1]])
    }

    const visit = Array.from({ length: numCourses }, () => false)
    const inStack = Array.from({ length: numCourses }, () => false)

    for (let i = 0; i < numCourses; i++) {
        if (map.has(i)) {
            if (dfs(i, visit, inStack)) {
                return false
            }
        }
    }

    return true

    function dfs(node: number, visit: boolean[], inStack: boolean[]) {
        if (!map.has(node)) {
            return false
        }

        if (inStack[node]) {
            return true
        }
        if (visit[node]) {
            return false
        }

        visit[node] = true
        inStack[node] = true
        for (const n of map.get(node)) {
            if (dfs(n, visit, inStack)) {
                return true
            }
        }
        inStack[node] = false
        return false
    }
}

console.log(
    canFinish(2, [
        [1, 0],
        [0, 1],
    ])
)
