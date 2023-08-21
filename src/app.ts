/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s: string) {
    let sub = ""

    if (s.length < 2) {
        return false
    }

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        sub += s[i]
        if (!s.split(sub).join("")) {
            return true
        }
    }

    return false
}

console.log(repeatedSubstringPattern("abc"))
