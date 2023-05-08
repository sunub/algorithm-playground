function compress(chars: string[]): number {
    let prev = ""
    let count = 0
    let idxToInsertAt = 0
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== prev) {
            if (count > 1) {
                const toInsert = `${count}`.split("")
                toInsert.forEach((char) => {
                    chars[idxToInsertAt++] = char
                })
            }
            chars[idxToInsertAt++] = chars[i]
            prev = chars[i]
            count = 1
        } else {
            count++
        }
    }
    if (count > 1) {
        const toInsert = `${count}`.split("")
        toInsert.forEach((char) => {
            chars[idxToInsertAt++] = char
        })
    }

    return idxToInsertAt
}

function myAnswer(chars: any[]): number {
    const map = new Map()
    let ptr1 = 0
    let ptr2 = 0
    while (ptr2 <= chars.length) {
        if (chars[ptr1] !== chars[ptr2]) {
            let distance = ptr2 - ptr1 - 1
            if (map.get(chars[ptr1]) <= 1) {
                chars.splice(ptr1 + 1, distance)
                ptr1 += 1
            } else {
                chars.splice(ptr1 + 1, distance, String(map.get(chars[ptr1])))
                ptr1 += 2
            }
            ptr2 = ptr1
            map.delete(chars[ptr1])
        }
        map.has(chars[ptr1])
            ? map.set(chars[ptr1], map.get(chars[ptr1]) + 1)
            : map.set(chars[ptr1], 1)

        ptr2 += 1
    }
    for (let i = 0; i < chars.length; i++) {
        let temp
        if (chars[i].length >= 2) {
            temp = chars[i].split("")
            chars.splice(i, 1, ...temp)
        }
    }
    return chars.length
}
