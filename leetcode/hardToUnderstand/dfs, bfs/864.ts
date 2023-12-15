// 864. Shortest Path to Get All Keys

// You are given an m x n grid grid where:

// '.' is an empty cell.
// '#' is a wall.
// '@' is the starting point.
// Lowercase letters represent keys.
// Uppercase letters represent locks.
// You start at the starting point and one move consists of walking one space in one of the four cardinal directions. You cannot walk outside the grid, or walk into a wall.

// If you walk over a key, you can pick it up and you cannot walk over a lock unless you have its corresponding key.

// For some 1 <= k <= 6, there is exactly one lowercase and one uppercase letter of the first k letters of the English alphabet in the grid. This means that there is exactly one key for each lock, and one lock for each key; and also that the letters used to represent the keys and locks were chosen in the same order as the English alphabet.

// Return the lowest number of moves to acquire all keys. If it is impossible, return -1.

const shortestPathAllKeys = function (grid) {
    // (charCode & 31) will give same result for upper and lower case letters
    const hash = (char) => 1 << ((char.charCodeAt() & 31) - 1)
    const isKey = (char) => /[abcdef]/.test(char)
    const isLock = (char) => /[ABCDEF]/.test(char)
    const canOpen = (keys, lock) => (keys & hash(lock) ? true : false)
    const h = grid.length
    const w = grid[0].length
    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ]
    const queue = new Queue()
    const visited = Array.from(Array(h), () => Array.from(Array(w), () => []))
    let keyCount = 0
    for (let r = 0; r < h; ++r) {
        for (let c = 0; c < w; ++c) {
            if (grid[r][c] === "@") queue.enqueue([r, c, 0, 0])
            else if (isKey(grid[r][c])) ++keyCount
        }
    }
    const fullKeyChain = 2 ** keyCount - 1
    while (!queue.isEmpty()) {
        let [r, c, d, keys] = queue.dequeue()
        if (r < 0 || c < 0 || r === h || c === w) continue // out of bounds
        if (visited[r][c][keys] || grid[r][c] === "#") continue // been here with same keys or hit wall
        visited[r][c][keys] = true
        if (isLock(grid[r][c]) && !canOpen(keys, grid[r][c])) continue // no key for lock
        if (isKey(grid[r][c])) keys |= hash(grid[r][c]) // add key to keys
        if (keys === fullKeyChain) return d
        for (const [rr, cc] of dirs)
            queue.enqueue([r + rr, c + cc, d + 1, keys])
    }
    return -1
}
