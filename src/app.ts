const map = new Map()

var numOfWays = function (nums: number[]) {
    const root = nums.shift()

    let left = nums.splice(0, Math.floor(nums.length / 2))
    let right = nums

    dfs(left, 2)
    dfs(right, 2)

    const floors = [...map.keys()]
    console.log(floors)
    return floors[floors.length - 1] * 2 - 1
}

function dfs(nums: number[], floor: number) {
    if (!nums.length) {
        return
    }

    map.has(floor)
        ? map.set(floor, [...map.get(floor), nums.shift()])
        : map.set(floor, [nums.shift()])

    if (nums.length % 2 === 0 && nums.length !== 0) {
        dfs(nums, floor + 1)
        dfs(nums.splice(0), floor + 1)
    } else {
        return
    }
}
console.log(numOfWays([3, 4, 5, 1, 2]))
