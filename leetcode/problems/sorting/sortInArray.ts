function sortArray(nums: number[]): number[] {
    const mid = Math.floor(nums.length / 2)
    let divide1 = sort(nums.slice(0, mid))
    let divide2 = sort(nums.slice(mid, nums.length))

    const answer = merge(nums, divide1, divide2)

    return answer
}

function merge(nums: number[], target1: number[], target2: number[]) {
    const res = Array(nums.length)
    let [i, j, k] = [0, 0, 0]

    while (k < nums.length) {
        if (target1[i] <= target2[j]) {
            res[k] = target1[i]
            i === target1.length - 1 ? (target1[i] = Infinity) : (i += 1)
        } else if (target2[j] <= target1[i]) {
            res[k] = target2[j]
            j === target2.length - 1 ? (target2[j] = Infinity) : (j += 1)
        }
        k += 1
    }

    return res
}

function sort(nums: number[]) {
    let ptr = 0
    while (ptr < nums.length) {
        for (let i = 1; i < nums.length - ptr; i++) {
            if (nums[i] < nums[i - 1]) {
                ;[nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
            }
        }
        ptr += 1
    }
    return nums
}
