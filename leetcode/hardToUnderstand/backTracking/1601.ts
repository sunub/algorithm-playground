// 1601. Maximum Number of Achievable Transfer Requests

// We have n buildings numbered from 0 to n - 1. Each building has a number of employees. It's transfer season, and some employees want to change the building they reside in.

// You are given an array requests where requests[i] = [fromi, toi] represents an employee's request to transfer from building fromi to building toi.

// All buildings are full, so a list of requests is achievable only if for each building, the net change in employee transfers is zero. This means the number of employees leaving is equal to the number of employees moving in. For example if n = 3 and two employees are leaving building 0, one is leaving building 1, and one is leaving building 2, there should be two employees moving to building 0, one employee moving to building 1, and one employee moving to building 2.

// Return the maximum number of achievable requests.

// Input: n = 5, requests = [[0,1],[1,0],[0,1],[1,2],[2,0],[3,4]]
// Output: 5

// Input: n = 3, requests = [[0,0],[1,2],[2,1]]
// Output: 3

/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function (n, requests) {
    const transfers = Array(n).fill(0)

    const backtrack = (curr, count, transfers) => {
        if (curr === requests.length) {
            if (transfers.every((t) => t === 0)) return count
            else return 0
        }

        transfers[requests[curr][0]] -= 1
        transfers[requests[curr][1]] += 1

        const countIncluded = backtrack(curr + 1, count + 1, transfers)

        transfers[requests[curr][0]] += 1
        transfers[requests[curr][1]] -= 1

        const countExcluded = backtrack(curr + 1, count, transfers)

        return Math.max(countIncluded, countExcluded)
    }
    return backtrack(0, 0, transfers)
}
