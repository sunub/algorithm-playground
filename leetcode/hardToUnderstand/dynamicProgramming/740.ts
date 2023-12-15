var deleteAndEarn = function (nums: number[]) {
    const hash = new Map()

    for (let i = 0; i < nums.length; i++) {
        hash.has(nums[i])
            ? hash.set(nums[i], hash.get(nums[i]) + nums[i])
            : hash.set(nums[i], nums[i])
    }

    let prev = -1
    let point1 = 0
    let point2 = 0
    const key = [...hash.keys()]

    for (const key of hash.keys()) {
        let value = hash.get(key)
        if (prev + 1 === Number(key)) value += point1
        else value += Math.max(point1, point2)
        point1 = Math.max(point1, point2)
        point2 = value
        prev = Number(key)
    }

    return Math.max(point1, point2)
}
