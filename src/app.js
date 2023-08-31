/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const newArray = new Map()

    arr1.map((arr) => {
        newArray.set(arr.id, arr)
    })

    arr2.map((arr) => {
        if (newArray.has(arr.id)) {
            newArray.set(arr.id, { ...newArray.get(arr.id), ...arr })
        } else {
            newArray.set(arr.id, { ...arr })
        }
    })

    const answer = [...newArray.values()]
    answer.sort((a, b) => a.id - b.id)

    return answer
}

console.log(
    join(
        [
            { id: 1, x: 2, y: 3 },
            { id: 2, x: 3, y: 6 },
        ],
        [
            { id: 2, x: 10, y: 20 },
            { id: 3, x: 0, y: 0 },
        ]
    )
)
