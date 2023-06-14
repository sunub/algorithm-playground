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
    console.log(myTrie.trie.children.get(11)?.children.get(1))
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

console.log(
    equalPairs([
        [11, 1],
        [1, 11],
    ])
)
