function longestPalindrome(s: string): string {
    const res = [""]

    for (let i = 0; i < s.length; i++) {
        let str = ""
        for (let j = i; j < s.length; j++) {
            str += s[j]
            if (isPalindrom(str) && str.length > res[0].length) {
                res.unshift(str)
            }
        }
        str = ""
    }

    return res[0]
}

function isPalindrom(str: string) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}
