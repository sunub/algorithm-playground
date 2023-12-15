// 316. Remove Duplicate Letters

// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is
// the smallest in lexicographical order
//  among all possible results.

// Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"

var removeDuplicateLetters = function (s) {
    let stack = [];
    let seen = new Set();
    let lastOcc = new Map();
    for (let i = 0; i < s.length; i++) {
        lastOcc.set(s[i], i);
    }

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (!seen.has(c)) {
            while (
                stack.length &&
                c < stack[stack.length - 1] &&
                i < lastOcc[stack[stack.length - 1]]
            ) {
                seen.delete(stack.pop());
            }
            seen.add(c);
            stack.push(c);
        }
    }

    return stack.join("");
};
