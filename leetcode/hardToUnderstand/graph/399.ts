// You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

// You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for
// Cj / Dj = ?.

// Return the answers to all queries. If a single answer cannot be determined, return -1.0.

// Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

var calcEquation = function (
    equations: string[][],
    values: number[],
    queries: string[][]
) {
    const adjList = new Map()

    for (let i = 0; i < equations.length; i++) {
        adjList.set(equations[i][0], [])
        adjList.set(equations[i][1], [])
    }

    for (let i = 0; i < equations.length; i++) {
        const u = equations[i][0]
        const v = equations[i][1]
        const weight = values[i]

        adjList.get(u).push([v, weight])
        adjList.get(v).push([u, 1 / weight])
    }

    const res: number[] = []

    for (let i = 0; i < queries.length; i++) {
        const src = queries[i][0]
        const dest = queries[i][1]
        const seen = new Set()
        const val = dfs(adjList, src, src, dest, 1, seen)

        if (val === false) {
            res.push(-1)
        } else {
            res.push(val as number)
        }
    }

    return res
}

var dfs = function (
    adjList,
    src,
    curr,
    dest,
    quotient,
    seen
): boolean | number {
    if (!adjList.has(dest) || !adjList.has(src)) {
        return -1
    }

    if (src === dest) {
        return 1
    }

    if (curr === dest) {
        return quotient
    }

    seen.add(curr)

    const neighbors = adjList.get(curr)

    for (let i = 0; i < neighbors.length; i++) {
        if (seen.has(neighbors[i][0])) {
            continue
        }
        const val = dfs(
            adjList,
            src,
            neighbors[i][0],
            dest,
            quotient * neighbors[i][1],
            seen
        )
        if (val !== false) return val
    }

    return false
}
