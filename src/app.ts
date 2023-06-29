function shortestPathAllKeys(grid: string[]) {
    const gridKeys: any = []
    let start: number[] = []
    for (let i = 0; i < grid.length; i++) {
        let row = []
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "@") {
                start = [i, j]
                row.push(0)
            } else if (grid[i][j] === ".") {
                row.push(0)
            } else if (grid[i][j] === "#") {
                row.push(-1)
            } else {
                row.push(grid[i][j])
            }
        }
        gridKeys.push(row)
    }

    dfs(start[0], start[1], 0, new Set())

    function dfs(i: number, j: number, sum: number, visit: Set<any>) {
        if (i < 0 || i + 1 > grid.length || j < 0 || j + 1 > grid[0].length) {
            return
        }

        if (gridKeys[i][j] === -1) {
            return
        }
        if (visit.has(`${i} ${j}`)) {
            return
        }

        gridKeys[i][j] = sum

        visit.add(`${i} ${j}`)
        dfs(i - 1, j, sum + 1, visit)
        dfs(i + 1, j, sum + 1, visit)
        dfs(i, j - 1, sum + 1, visit)
        dfs(i, j + 1, sum + 1, visit)
        return sum
    }
}
console.log(shortestPathAllKeys(["@.a..", "###.#", "b.A.B"]))
