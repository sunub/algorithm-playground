class TrieNode {
    children: Map<string, TrieNode>
    word: boolean
    constructor() {
        this.children = new Map()
        this.word = false
    }
    setEnd() {
        this.word = true
    }
    isEnd() {
        return this.word
    }
}

class WordDictionary {
    root: TrieNode
    constructor() {
        this.root = new TrieNode()
    }

    addWord(word: string) {
        let node = this.root

        function recur(node, word: string) {
            if (word) {
                if (!node.children.has(word[0])) {
                    node.children.set(word[0], new TrieNode())
                }
                return recur(node.children.get(word[0]), word.substring(1))
            } else {
                node.setEnd()
            }
        }

        recur(node, word)
        return true
    }

    search(word) {
        return this.searchInNode(this.root, word)
    }

    searchInNode(word, node): boolean {
        if (!node) return false

        if (word) {
            if (word[0] === ".") {
                let out = false
                for (let val of node.children.keys()) {
                    out =
                        out ||
                        this.searchInNode(
                            node.children.get(val),
                            word.substr(1)
                        )
                }
                return out
            } else if (node.children.has(word[0])) {
                return this.searchInNode(
                    node.children.get(word[0]),
                    word.substring(1)
                )
            } else {
                return false
            }
        } else return node.isEnd()
    }
}
