// 1751. Maximum Number of Events That Can Be Attended II

// You are given an array of events where events[i] = [startDayi, endDayi, valuei]. The ith event starts at startDayi and ends at endDayi, and if you attend this event, you will receive a value of valuei. You are also given an integer k which represents the maximum number of events you can attend.

// You can only attend one event at a time. If you choose to attend an event, you must attend the entire event. Note that the end day is inclusive: that is, you cannot attend two events where one of them starts and the other ends on the same day.

// Return the maximum sum of values that you can receive by attending events.

// Input: events = [[1,2,4],[3,4,3],[2,3,1]], k = 2
// Output: 7

// Input: events = [[1,2,4],[3,4,3],[2,3,10]], k = 2
// Output: 10

// Input: events = [[1,1,1],[2,2,2],[3,3,3],[4,4,4]], k = 3
// Output: 9

var maxValue = function (A, K) {
    A.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
    A = A.map(([s, e, val], i) => [s, e, val, i])
    let n = A.length,
        dp = [...Array(K + 1)].map((d) => [...Array(n + 1)].map((d) => 0)),
        Z = [...A].sort((a, b) => a[1] - b[1])
    for (let k = 1; k <= K; k++) {
        let indexOfZ = 0,
            optimalPrevious = 0
        for (let i = 1; i <= n; i++) {
            let [start, end, val, idx] = A[i - 1]
            while (indexOfZ < n && Z[indexOfZ][1] < start) {
                let originalIdx = Z[indexOfZ][3] //take the original index it used to have
                if (dp[k - 1][originalIdx + 1] > optimalPrevious)
                    optimalPrevious = dp[k - 1][originalIdx + 1]
                indexOfZ++
            }
            dp[k][i] = Math.max(val + optimalPrevious, dp[k][i]) //main dp computation
        }
    }
    return Math.max(...dp[K])
}
