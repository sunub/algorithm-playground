// 389. Find the Difference

// You are given two strings s and t.
// String t is generated by random shuffling string s and then add one more letter at a random position.
// Return the letter that was added to t.

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    s = s.split("").sort();
    t = t.split("").sort();

    let answer = "";
    for (let i = 0; i < t.length; i++) {
        if (s[i] !== t[i]) {
            answer = t[i];
            break;
        }
    }

    return answer;
};

var ohterSolution = function (s, t) {
    let map1 = new Map();
    let map2 = new Map();

    map1 = setMap(map1, s);
    map2 = setMap(map2, t);

    let answer = "";
    for (const key of map2.keys()) {
        if (!map1.has(key) || map2.get(key) !== map1.get(key)) {
            answer = key;
        }
    }

    return answer;
};

function setMap(map, target) {
    for (let i = 0; i < target.length; i++) {
        map.has(target[i])
            ? map.set(target[i], map.get(target[i]) + 1)
            : map.set(target[i], 1);
    }
    return map;
}
