// 1615. Maximal Network Rank

// There is an infrastructure of n cities with some number of roads connecting these cities. Each roads[i] = [ai, bi] indicates that there is a bidirectional road between cities ai and bi.

// The network rank of two different cities is defined as the total number of directly connected roads to either city. If a road is directly connected to both cities, it is only counted once.

// The maximal network rank of the infrastructure is the maximum network rank of all pairs of different cities.

// Given the integer n and the array roads, return the maximal network rank of the entire infrastructure.

// Input: n = 4, roads = [[0,1],[0,3],[1,2],[1,3]]
// Output: 4
// Explanation: The network rank of cities 0 and 1 is 4 as there are 4 roads that are connected to either 0 or 1. The road between 0 and 1 is only counted once.

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
