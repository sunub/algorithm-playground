// 207. Course Schedule

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false

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
