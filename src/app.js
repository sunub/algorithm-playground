var join = function (arr1, arr2) {
    const answer = []

    while (arr1.length) {
        const curr = {}
        const currArr1 = arr1.shift()

        for (let i = 0; i < arr2.length; i++) {
            const id = arr2[i].id

            if (currArr1.id === id) {
                curr.id = id

                const key1 = Object.keys(currArr1).filter((key) => key !== "id")
                const key2 = Object.keys(arr2).filter((key) => key !== "id")

                let keys, target
                if (key1.length > key2.length) {
                    keys = key1
                    target = currArr1
                } else {
                    keys = key2
                    target = arr2
                }

                keys.map((key) => (curr[`${key}`] = target[key]))
                break
            } else {
            }
        }

        answer.push(curr)
    }

    console.log(answer)
}
console.log(
    join(
        [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
        [{ id: 1, b: { c: 84 }, v: [1, 3] }]
    )
)

const a = [1, 2, 3, 4, 5]
const b = [1, 2, 3]

const c = new Set(a)
const d = new Set(b)
