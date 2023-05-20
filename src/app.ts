var calcEquation = function (
    equations: string[][],
    values: number[],
    queries: string[][]
) {
    const map = new Map()

    let i = 0
    for (const factor of equations) {
        const value = values[i]
        const underDot = String(value).indexOf(".")
        const multiple =
            underDot === -1
                ? 10
                : Math.pow(10, String(value).slice(underDot + 1).length)

        if (!map.has(factor[0])) {
            let v1 = map.has(factor[1])
                ? map.get(factor[1]) * value
                : value * multiple
            map.set(factor[0], v1)
        }
        if (!map.has(factor[1])) {
            let v2 = map.has(factor[0]) ? map.get(factor[0]) / value : multiple
            map.set(factor[1], v2)
        }
    }

    const answer: number[] = []
    for (const query of queries) {
        if (!map.has(query[0]) || !map.has(query[1])) {
            answer.push(-1)
            continue
        }
        const result = map.get(query[0]) / map.get(query[1])
        answer.push(result)
    }
    return answer
}

calcEquation(
    [
        ["a", "b"],
        ["b", "c"],
    ],
    [2.0, 3.0],
    [
        ["a", "c"],
        ["b", "a"],
        ["a", "e"],
        ["a", "a"],
        ["x", "x"],
    ]
)

const a = 1.0
const b = String(a).indexOf(".")
console.log(b)
