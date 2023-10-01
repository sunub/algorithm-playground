// 557. Reverse Words in a String III
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const copy = s.split(" ");
    let result = "";
    for (let i = 0; i < copy.length - 1; i++) {
        const text = copy[i];
        let current = "";
        for (let j = text.length - 1; j >= 0; j--) {
            current += text[j];
        }
        result += current;
        result += " ";
    }

    let cur = "";
    for (let j = copy[copy.length - 1].length - 1; j >= 0; j--) {
        cur += copy[copy.length - 1][j];
    }
    result += cur;
    return result;
};
