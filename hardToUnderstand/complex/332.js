// 332. Reconstruct Itinerary

// You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

// All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

// For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

// Example 1:

// Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
// Output: ["JFK","MUC","LHR","SFO","SJC"]
// Example 2:

// Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
// Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.

var findItinerary = function (tickets) {
    var map = {}
    var res = []
    for (var i = 0; i < tickets.length; i++) {
        var dep = tickets[i][0]
        var des = tickets[i][1]
        if (map[dep]) {
            map[dep].push(des)
        } else {
            map[dep] = [des]
        }
    }
    for (let loc in map) {
        map[loc].sort()
    }
    var dfs = function (node) {
        var des = map[node]
        while (des && des.length > 0) {
            dfs(des.shift())
        }
        res.push(node)
    }
    dfs("JFK")
    return res.reverse()
}
