var maximumRequests = function (n: number, requests: number[][]) {
    const request = new Map()
    const capability = Array.from({ length: n }, () => 0)

    for (const req of requests) {
        request.has(req[0])
            ? request.set(req[0], [...request.get(req[0]), req[1]])
            : request.set(req[0], [req[1]])
    }

    for (const [cap, req] of request.entries()) {
        capability[cap] = req.length
    }
    console.log(capability)
}
console.log(
    maximumRequests(5, [
        [0, 1],
        [1, 0],
        [0, 1],
        [1, 2],
        [2, 0],
        [3, 4],
    ])
)
