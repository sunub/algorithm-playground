// 459. Repeated Substring Pattern

// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Input: s = "abab"
// Output: true

// Input: s = "aba"
// Output: false

// Input: s = "abcabcabcabc"
// Output: true

function repeatedSubstringPattern(s: string) {
    const mid = Math.floor(s.length / 2)

    let leftSub = "",
        left = 0
    while (left < mid) {
        leftSub += s[left]
        let sSplit = s.split(leftSub)
        let subSum = sSplit.reduce((a, b) => a + b, "")
        if (subSum === "") {
            return true
        }
        left += 1
    }
    return false
}

function otherSolution(s: string) {
    const mid = Math.floor(s.length / 2)
    // 같은 길이의 반복되는 substring의 존재를 확인하는 것이므로 최대의 길이가 전체 문자의 길이의 절반의 길이가 최대의 길이가 된다. 그러므로 전체 s의 길이를 확인하는 것이 아닌 절반의 길이만 확인해도 된다.

    if (s.length < 2) {
        return false
    }

    let subString = ""
    for (let i = 0; i < mid; i++) {
        subString += s[i]
        if (!s.split(subString).join("")) {
            // split 메소드를 이용하면 특정 문자들을 제외한 배열을 반환한다. 이렇게 반환 받은 값이 만약 빈 "" 값일 경우에는 모두 같은 substring이므로 true를 반환하게 된다.
            return true
        }
    }

    return false
}
