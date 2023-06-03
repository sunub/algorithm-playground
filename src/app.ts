const arr = [[[6], [1, 3, [[[3]]]]], [1, 3], []]
const res = []

function search(array: any, res: any[]): any {
    for (const a of array) {
        if (Array.isArray(a)) search(a, res)
        else res.push(a)
    }
    return res
}

search(arr, [])

var inorderTraversal = function* (arr: any) {
    if (!arr.length) return arr

    function search(array: any, res: any[]): any {
        for (const a of array) {
            if (Array.isArray(a)) search(a, res)
            else res.push(a)
        }
        return res
    }

    const b = search(arr, [])

    while (b.length) {
        yield b.shift()
    }
}

const gen = inorderTraversal([[[6], [1, 3, [[[3]]]]], [1, 3], []])
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
