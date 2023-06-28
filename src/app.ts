var maxProbability = function (
    n: number,
    edges: number[][],
    succProb: number[],
    start: number,
    end: number
) {
    const adjList: Map<number, number[]> = new Map()
    const succ: Map<any, any> = new Map()
    for (let i = 0; i < edges.length; i++) {
        let key1 = `${edges[i][0]} ${edges[i][1]}`

        succ.set(key1, succProb[i])
        insertMap(edges[i][0], edges[i][1], adjList)
    }

    let answer = -Infinity
    for (const point of adjList.get(start)!) {
        answer = Math.max(
            answer,
            traverse(point, end, [start], -Infinity, [
                succ.get(`${start} ${point}`),
            ])
        )
    }
    return answer

    function traverse(
        s: number,
        end: number,
        visit: number[],
        result: number,
        array: any
    ) {
        if (visit.includes(s) || !adjList.has(s)) {
            return 0
        }
        if (s === end) {
            result = array.reduce((acc: number, cur: number) => {
                const result = acc * cur
                return Number(result.toFixed(5))
            })
            return result
        }

        visit.push(s)
        for (const v of adjList.get(s)!) {
            let key = `${s} ${v}`
            if (succ.has(key)) {
                array.push(succ.get(key))
            }
            result = Math.max(result, traverse(v, end, visit, result, array))
            array.pop()
        }
        return result
    }
}

function insertMap(start: number, end: number, map: Map<number, number[]>) {
    return map.has(start)
        ? map.set(start, [...map.get(start)!, end])
        : map.set(start, [end])
}
console.log(
    maxProbability(
        5,
        [
            [2, 3],
            [1, 2],
            [3, 4],
            [1, 3],
            [1, 4],
            [0, 1],
            [2, 4],
            [0, 4],
            [0, 2],
        ],
        [0.06, 0.26, 0.49, 0.25, 0.2, 0.64, 0.23, 0.21, 0.77],
        0,
        3
    )
)
// let a = 0.77 * 0.66
// a = Number(a.toFixed(5))
// console.log(a)

// // 2
// let b = 0.64 * 0.25
// b = Number(b.toFixed(5))
// console.log(b)

// // 1
// let c = 0.64 * 0.26
// c = Number(c.toFixed(5))
// c *= 0.06
// c = Number(c.toFixed(5))
// console.log(c)
