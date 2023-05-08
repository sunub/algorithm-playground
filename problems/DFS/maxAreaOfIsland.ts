function maxAreaOfIsland(grid: number[][]): number {
    let answer = 0
    function search(x: number, y: number): number {
        if (
            x < 0 ||
            x >= grid.length ||
            y < 0 ||
            y >= grid[0].length ||
            grid[x][y] === 0
        ) {
            return 0
        }
        grid[x][y] = 0
        return (
            1 +
            search(x - 1, y) +
            search(x + 1, y) +
            search(x, y - 1) +
            search(x, y + 1)
        )
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            answer = Math.max(answer, search(i, j))
        }
    }
    console.log(answer)
    return answer
}
