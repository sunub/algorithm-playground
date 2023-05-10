/**
 * @example
 * Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
 *
 * @argument { Input: n = 3 }
 * @returns { Output: [[1,2,3],[8,9,4],[7,6,5]] }
 */

function generateMatrix(n: number) {
    const answer: number[][] = Array.from(Array(n), () => Array(n).fill(0))
    let count = 1

    for (let layer = 0; layer < (n + 1) / 2; layer++) {
        for (let ptr = layer; ptr < n - layer; ptr++) {
            answer[layer][ptr] = count++
        }

        for (let ptr = layer + 1; ptr < n - layer; ptr++) {
            answer[ptr][n - layer - 1] = count++
        }

        for (let ptr = layer + 1; ptr < n - layer; ptr++) {
            answer[n - layer - 1][n - ptr - 1] = count++
        }

        for (let ptr = layer + 1; ptr < n - layer - 1; ptr++) {
            answer[n - ptr - 1][layer] = count++
        }
    }
    return answer
}
