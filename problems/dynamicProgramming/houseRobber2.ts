// my answer

function rob(nums: number[]): number {
    if (nums.length === 0) {
        return 0
    }
    if (nums.length === 1) {
        return nums[0]
    }
    if (nums.length === 3 || nums.length === 2) {
        return Math.max(...nums)
    }

    const copy = [...nums]
    const case1 = copy.slice(1, copy.length)
    const case2 = copy.slice(0, copy.length - 1)

    const maxProfit1 = rubbing(case1)
    const maxProfit2 = rubbing(case2)

    return Math.max(maxProfit1, maxProfit2)
}

function robbing(nums: number[]): number {
    let twoStep = nums[0]
    let oneStep = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        const curMaxProfit = Math.max(nums[i] + twoStep, oneStep)
        twoStep = oneStep
        oneStep = curMaxProfit
    }
    return Math.max(oneStep, twoStep)
}

function betterTiem(nums: number[]): number {
    if (!nums.length) {
        return 0
    }

    let max = 0
    let previous = 0

    for (let i = 1; i < nums.length; i++) {
        const current = max + nums[i]
        max = Math.max(previous, max)
        previous = current
    }

    const firstIterationMax = Math.max(previous, max)

    max = 0
    previous = 0

    for (let i = 0; i < nums.length - 1; i++) {
        const current = max + nums[i]
        max = Math.max(previous, max)
        previous = current
    }

    const secondIterationMax = Math.max(previous, max)

    return Math.max(firstIterationMax, secondIterationMax, nums[0])
}
