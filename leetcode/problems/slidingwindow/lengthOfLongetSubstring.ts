function lengthOfLongestSubstring(s: string): number {
    let result: number = 0
    let word: string = ""
    let count: number = 1
    let limit: number = 0
    let newS: string = s

    while (newS[limit] !== undefined) {
        let objectS: Record<string, number> = {}

        limit++

        let flag = true

        for (let i: number = 0; i <= limit - 1; i++) {
            objectS[newS[i]] === undefined
                ? (objectS[newS[i]] = 1)
                : objectS[newS[i]]++
        }

        for (let key in objectS) {
            if (objectS[key] > 1) {
                flag = false
                break
            }
        }

        if (!flag) {
            limit = 0
            let sliceS: string = newS.slice(1)
            newS = sliceS
        } else {
            word =
                word.length < Object.keys(objectS).join("").length
                    ? Object.keys(objectS).join("")
                    : word
            if (word.length === 95) {
                break
            }
        }
    }

    console.log(word)

    return word.length
}
