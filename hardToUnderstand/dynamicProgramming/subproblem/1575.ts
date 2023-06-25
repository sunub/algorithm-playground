// 1575. Count All Possible Routes

// HARD

// You are given an array of distinct positive integers locations where locations[i] represents the position of city i. You are also given integers start, finish and fuel representing the starting city, ending city, and the initial amount of fuel you have, respectively.

// At each step, if you are at city i, you can pick any city j such that j != i and 0 <= j < locations.length and move to city j. Moving from city i to city j reduces the amount of fuel you have by |locations[i] - locations[j]|. Please notice that |x| denotes the absolute value of x.

// Notice that fuel cannot become negative at any point in time, and that you are allowed to visit any city more than once (including start and finish).

// Return the count of all possible routes from start to finish. Since the answer may be too large, return it modulo 109 + 7.

/**
 * @argument { Input: locations = [2,3,6,8,4], start = 1, finish = 3, fuel = 5 }
 * @returns { Output: 4 }
 */

function countRoutes(
    locations: number[],
    start: number,
    finish: number,
    fuel: number
) {
    const n = locations.length
    const dp = Array.from({ length: n }, () =>
        Array.from({ length: fuel + 1 }, () => -1)
    )

    for (let j = 0; j <= fuel; j++) {
        for (let i = 0; i < n; i++) {
            for (let k = 0; k < n; k++) {
                if (k == i) {
                    continue
                }
                console.log(Math.abs(locations[i] - locations[k]))
                if (Math.abs(locations[i] - locations[k]) <= j) {
                    dp[i][j] =
                        (dp[i][j] +
                            dp[k][j - Math.abs(locations[i] - locations[k])]) %
                        1000000007
                }
            }
        }
    }
    return dp[start][fuel]
}
