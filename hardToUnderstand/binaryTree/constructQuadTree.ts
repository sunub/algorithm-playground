/**
 * Definition for node.
 * class Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: Node | null
 *     topRight: Node | null
 *     bottomLeft: Node | null
 *     bottomRight: Node | null
 *     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *     }
 * }
 */

class QuadNode {
    val: boolean
    isLeaf: boolean
    topLeft: QuadNode | null
    topRight: QuadNode | null
    bottomLeft: QuadNode | null
    bottomRight: QuadNode | null
    constructor(
        val?: boolean,
        isLeaf?: boolean,
        topLeft?: QuadNode,
        topRight?: QuadNode,
        bottomLeft?: QuadNode,
        bottomRight?: QuadNode
    ) {
        this.val = val === undefined ? false : val
        this.isLeaf = isLeaf === undefined ? false : isLeaf
        this.topLeft = topLeft === undefined ? null : topLeft
        this.topRight = topRight === undefined ? null : topRight
        this.bottomLeft = bottomLeft === undefined ? null : bottomLeft
        this.bottomRight = bottomRight === undefined ? null : bottomRight
    }
}

function construct(grid: number[][]): QuadNode | null {
    return solve(grid, 0, 0, grid.length)
}

function solve(
    grid: number[][],
    x1: number,
    y1: number,
    length: number
): QuadNode {
    if (sameValue(grid, x1, y1, length)) {
        return new QuadNode(grid[x1][y1] === 1, true)
    } else {
        const root = new QuadNode(false, false)

        root.topLeft = solve(grid, x1, y1, length / 2)
        root.topRight = solve(grid, x1, y1 + length / 2, length / 2)
        root.bottomLeft = solve(grid, x1 + length / 2, y1, length / 2)
        root.bottomRight = solve(
            grid,
            x1 + length / 2,
            y1 + length / 2,
            length / 2
        )

        return root
    }
}

function sameValue(grid: number[][], x1: number, y1: number, length: number) {
    for (let i = x1; i < x1 + length; i++) {
        for (let j = y1; j < y1 + length; j++) {
            if (grid[i][j] !== grid[x1][y1]) {
                return false
            }
        }
    }
    return true
}
