class Trie {
    children: Map<string, Trie | any>
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
    root: Trie
    constructor() {
        this.root = new Trie()
    }

    addWord(word: string): void {
        let node = this.root
        function recur(node: Trie, word: string): void {
            if (word) {
                if (!node.children.has(word[0])) {
                    node.children.set(word[0], new Trie())
                }
                return recur(node.children.get(word[0]), word.substring(1))
            } else {
                node.setEnd()
            }
        }

        return recur(node, word)
    }

    search(word: string): boolean {
        return this.searchInNode(word, this.root)
    }

    searchInNode(word: string, node: Trie): boolean {
        if (!this.root) {
            return false
        }
        if (word) {
            if (!node.children.has(word[0])) {
                let out = false
                if (word[0] === ".") {
                    for (const key of node.children.keys()) {
                        out =
                            out ||
                            this.searchInNode(
                                word.substring(1),
                                node.children.get(key)
                            )
                    }
                }
                return out
            } else if (node.children.has(word[0])) {
                return this.searchInNode(
                    word.substring(1),
                    node.children.get(word[0])
                )
            } else {
                return false
            }
        } else {
            return node.isEnd()
        }
    }
}
