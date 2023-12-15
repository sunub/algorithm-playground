function permuteUnique(nums: number[]): number[][] {
    const numberOfItems: number = nums.length
    const map: Map<number, number> = new Map() // (item, # of available times)
    const numsWithNoDuplicate: number[] = []
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
            numsWithNoDuplicate.push(num)
        }
    }

    const result: number[][] = []
    const currPath: number[] = []

    permute(numberOfItems, numsWithNoDuplicate, currPath, map, result)

    return result
    // N = the number of items in the given array
    // T.C: O(N!)
    // S.C: O(N)
}

function permute(
    numberOfItems: number,
    nums: number[],
    currPath: number[],
    map: Map<number, number>,
    result: number[][]
) {
    if (currPath.length === numberOfItems) {
        const newArray: number[] = currPath.slice()
        result.push(newArray)
        return
    }
    for (let i = 0; i < nums.length; i++) {
        const num: number = nums[i]
        if (map.get(num) > 0) {
            currPath.push(num)
            map.set(num, map.get(num) - 1)

            permute(numberOfItems, nums, currPath, map, result)

            currPath.pop()
            map.set(num, map.get(num) + 1)
        }
    }
}
