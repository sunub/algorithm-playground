function maxSubArray(nums: number[]) {
    let numsArray = nums

    function findBestSubArray(left: number, right: number) {
        if (left > right) {
            return Number.MIN_SAFE_INTEGER
        }

        let mid = Math.floor((left + right) / 2)
        let curr = 0
        let bestLeftSum = 0
        let bestRightSum = 0

        for (let i = mid - 1; i >= left; i--) {
            curr += numsArray[i]
            bestLeftSum = Math.max(bestLeftSum, curr)
        }

        curr = 0

        for (let i = mid + 1; i <= right; i++) {
            curr += numsArray[i]
            bestRightSum = Math.max(bestRightSum, curr)
        }

        let bestCombineSum = numsArray[mid] + bestLeftSum + bestRightSum

        let leftHalf = findBestSubArray(left, mid - 1)
        let rightHalf = findBestSubArray(mid + 1, right)

        return Math.max(bestCombineSum, Math.max(leftHalf, rightHalf))
    }

    return findBestSubArray(0, nums.length - 1)
}
