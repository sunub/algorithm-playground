// 1048. Longest String Chain

// You are given an array of words where each word consists of lowercase English letters.

// wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the other characters to make it equal to wordB.

// For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".
// A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k == 1.

// Return the length of the longest possible word chain with words chosen from the given list of words.

// Example 1:

// Input: words = ["a","b","ba","bca","bda","bdca"]
// Output: 4
// Explanation: One of the longest word chains is ["a","ba","bda","bdca"].
// Example 2:

// Input: words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
// Output: 5
// Explanation: All the words can be put in a word chain ["xb", "xbc", "cxbc", "pcxbc", "pcxbcf"].
// Example 3:

// Input: words = ["abcd","dbqca"]
// Output: 1
// Explanation: The trivial word chain ["abcd"] is one of the longest word chains.
// ["abcd","dbqca"] is not a valid word chain because the ordering of the letters is changed.

var longestStrChain = function (words) {
    let W = Array.from({ length: 17 }, (_) => new Set());
    for (let i = 0; i < words.length; i++) W[words[i].length].add(words[i]);
    let dp = new Map(),
        best = 1;
    for (let i = 16; i; i--) {
        if (!W[i - 1].size) continue;
        for (let word of W[i]) {
            let wVal = dp.get(word) || 1;
            for (let j = 0; j < word.length; j++) {
                let pred = word.slice(0, j) + word.slice(j + 1);
                if (W[i - 1].has(pred) && wVal >= (dp.get(pred) || 1)) {
                    dp.set(pred, wVal + 1);
                    best = Math.max(best, wVal + 1);
                }
            }
        }
    }
    return best;
};
