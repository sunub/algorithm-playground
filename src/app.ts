var reorganizeString = function (s: string) {
    if (s.length <= 1) return s

    let sArray: string[] = s.split("")
    const n = s.length
    const queue: string[] = []

    let i = 1
    while (i < sArray.length) {
        if (sArray[i] === sArray[i - 1]) {
            queue.push(s[i])
            sArray = [...sArray.slice(0, i), ...sArray.slice(i + 1, n)]
            continue
        }
        i += 1
    }

    while (queue.length) {
        let curr: string = queue.pop()!

        for (let i = 0; i <= sArray.length; i++) {
            if (i === 0 && sArray[i] !== curr) {
                sArray.unshift(curr)
                break
            }

            if (i === sArray.length) {
                curr !== sArray[i - 1] ? sArray.push(curr) : null
                break
            }

            if (sArray[i - 1] !== curr && sArray[i] !== curr) {
                sArray = [
                    ...sArray.slice(0, i),
                    curr,
                    ...sArray.slice(i, sArray.length),
                ]
                break
            }
        }
    }

    return sArray.length === s.length ? sArray.join("") : ""
}

console.log(reorganizeString("baabb"))
