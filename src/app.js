var maximalNetworkRank = function (n, roads) {
    const adj = new Map()
    const networkRank = new Map()

    for (let i = 0; i < roads.length; i++) {
        connectingAdjList("list", roads[i][0], roads[i][1])
        connectingAdjList("list", roads[i][1], roads[i][0])
        connectingAdjList("count", roads[i][0], roads[i][1])
        connectingAdjList("count", roads[i][1], roads[i][0])
    }

    const countedNetworkAndCiti = [...networkRank.entries()]

    let answer = 0

    for (let i = 0; i < countedNetworkAndCiti.length; i++) {
        let cities = [...adj.get(countedNetworkAndCiti[i][0])]
        let currCitiCount = countedNetworkAndCiti[i][1]

        for (let j = i + 1; j < countedNetworkAndCiti.length; j++) {
            const isConnected = cities.includes(countedNetworkAndCiti[j][0])
            const nextCitiCound = isConnected
                ? countedNetworkAndCiti[j][1] - 1
                : countedNetworkAndCiti[j][1]

            answer = Math.max(answer, currCitiCount + nextCitiCound)
        }
    }
    return answer

    function connectingAdjList(uses, key, val) {
        if (uses === "list") {
            return adj.has(key)
                ? adj.set(key, [...adj.get(key), val])
                : adj.set(key, [val])
        }
        return networkRank.has(key)
            ? networkRank.set(key, networkRank.get(key) + 1)
            : networkRank.set(key, 1)
    }
}

console.log(
    maximalNetworkRank(5, [
        [0, 1],
        [0, 3],
        [1, 2],
        [1, 3],
        [2, 3],
        [2, 4],
    ])
)
