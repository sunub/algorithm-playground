// 2483. Minimum Penalty for a Shop
// You are given the customer visit log of a shop represented by a 0-indexed string customers consisting only of characters 'N' and 'Y':

// if the ith character is 'Y', it means that customers come at the ith hour
// whereas 'N' indicates that no customers come at the ith hour.
// If the shop closes at the jth hour (0 <= j <= n), the penalty is calculated as follows:

// For every hour when the shop is open and no customers come, the penalty increases by 1.
// For every hour when the shop is closed and customers come, the penalty increases by 1.
// Return the earliest hour at which the shop must be closed to incur a minimum penalty.

// Note that if a shop closes at the jth hour, it means the shop is closed at the hour j.

// Input: customers = "YYNY"
// Output: 2

// Input: customers = "NNNNN"
// Output: 0

var bestClosingTime = function (customers: string[]) {
    let currPenalty = 0,
        minPenalty = 0,
        earliestHour = 0

    for (let i = 0; i < customers.length; i++) {
        if (customers[i] === "Y") {
            currPenalty += 1
        } else {
            currPenalty -= 1
        }

        if (currPenalty < minPenalty) {
            earliestHour = i
            minPenalty = currPenalty
        }
    }

    return minPenalty
}

// 최소 값을 저장하고 현재 변하는 값을 추적했어야 했는데 각각의 모든 경우에서 값을 제거하려 했다. 문제의 요구사항은 최소 값일 경우의 시간을 구해야 하는데 단순히 시간이 지날때마다 어느정도의 페널티가 있는지만을 계산한 것이 문제인듯 하다.
