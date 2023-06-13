// 2352. Equal Row and Column Pairs

// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

/**
 * @argument { Input: grid = [[3,2,1],[1,7,6],[2,7,7]] }
 * @returns { Output: 1 }
 */

function mySolution(grid: number[][]): number {
    const n = grid.length
    let answer = 0
    const memo = new Map()

    for (let i = 0; i < n; i++) {
        let rowNum = grid[i].join(" ")
        for (let j = 0; j < n; j++) {
            let colNum = getColNum(0, j)
            if (rowNum === colNum) {
                answer += 1
            }
        }
    }

    function getColNum(col: number, row: number) {
        if (memo.has(col)) {
            return memo.get(col)
        }

        let colNum: number[] = []
        while (col < n) {
            colNum.push(grid[col][row])
            col += 1
        }
        memo.set(col, colNum)
        return colNum.join(" ")
    }

    return answer
}

function equalPairs(grid: number[][]): number {
    const myTrie = new Trie()
    let count = 0,
        n = grid.length

    for (let row of grid) {
        myTrie.insert(row)
    }

    for (let c = 0; c < n; ++c) {
        let colArray = Array.from({ length: n }, (v, _) => (v = 0))
        for (let r = 0; r < n; ++r) {
            colArray[r] = grid[r][c]
        }
        count += myTrie.search(colArray)
    }

    return count
}

class TrieNode {
    count: number
    children: Map<number, TrieNode>

    constructor() {
        this.count = 0
        this.children = new Map()
    }
}

class Trie {
    trie: TrieNode
    constructor() {
        this.trie = new TrieNode()
    }

    insert(array: number[]) {
        let myTrie = this.trie
        for (let num of array) {
            if (!myTrie.children.has(num)) {
                myTrie.children.set(num, new TrieNode())
            }
            myTrie = myTrie.children.get(num)!
        }
        myTrie.count += 1
    }

    search(array: number[]) {
        let myTrie = this.trie
        for (let num of array) {
            if (myTrie.children.has(num)) {
                myTrie = myTrie.children.get(num)!
            } else {
                return 0
            }
        }
        return myTrie.count
    }
}
