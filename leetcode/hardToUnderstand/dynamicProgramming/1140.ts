// Stone Game2

// Alice and Bob continue their games with piles of stones.  There are a number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].  The objective of the game is to end with the most stones.

// Alice and Bob take turns, with Alice starting first.  Initially, M = 1.

// On each player's turn, that player can take all the stones in the first X remaining piles, where 1 <= X <= 2M.  Then, we set M = max(M, X).

// The game continues until all the stones have been taken.

// Assuming Alice and Bob play optimally, return the maximum number of stones Alice can get.

/**
 * @argument { Input: piles = [2,7,9,4,4] }
 * @returns { Output: 10 }
 */

/**
 * @argument { Input: piles = [1,2,3,4,5,100] }
 * @returns { Output: 104 }
 */

function stoneGameII(piles: number[]): number {
    const n = piles.length
    const memo = new Map()
    const sums = new Array(n).fill(0)

    sums[n - 1] = piles[n - 1]

    for (let i = n - 2; i >= 0; i--) {
        sums[i] = sums[i + 1] + piles[i]
    }

    return findMax(0, 1)

    function findMax(index: number, M: number) {
        const key = `${index}#${M}`

        if (n - index <= 2 * M) return sums[index]
        if (memo.has(key)) return memo.get(key)

        let res = Number.MIN_SAFE_INTEGER

        for (let x = 1; x <= 2 * M; x++) {
            const newM = Math.max(x, M)
            res = Math.max(res, sums[index] - findMax(index + x, newM))
        }

        memo.set(key, res)
        return res
    }
}
