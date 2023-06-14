"use strict";
function equalPairs(grid) {
    const myTrie = new Trie();
    let count = 0, n = grid.length;
    for (let row of grid) {
        myTrie.insert(row);
    }
    for (let c = 0; c < n; ++c) {
        let colArray = Array.from({ length: n }, (v, _) => (v = 0));
        for (let r = 0; r < n; ++r) {
            colArray[r] = grid[r][c];
        }
        count += myTrie.search(colArray);
    }
    return count;
}
class TrieNode {
    count;
    children;
    constructor() {
        this.count = 0;
        this.children = new Map();
    }
}
class Trie {
    trie;
    constructor() {
        this.trie = new TrieNode();
    }
    insert(array) {
        let myTrie = this.trie;
        for (let num of array) {
            if (!myTrie.children.has(num)) {
                myTrie.children.set(num, new TrieNode());
            }
            myTrie = myTrie.children.get(num);
        }
        myTrie.count += 1;
    }
    search(array) {
        let myTrie = this.trie;
        for (let num of array) {
            if (myTrie.children.has(num)) {
                myTrie = myTrie.children.get(num);
            }
            else {
                return 0;
            }
        }
        return myTrie.count;
    }
}
console.log(equalPairs([
    [11, 1],
    [1, 11],
]));
//# sourceMappingURL=app.js.map