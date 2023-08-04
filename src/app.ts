function wordBreak(s: string, wordDict: string[]) {
    let answer = true

    return answer

    function breakingWord(string: string, dict: string) {
        if (string.includes(dict)) {
            console.log(string.split(dict))
        } else {
            answer = false
        }
        return
    }
}
console.log(wordBreak("applepenapple", ["apple", "pen"]))
