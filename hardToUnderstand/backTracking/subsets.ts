function subsets(nums: number[]): number[][] {
    const res: number[][] = []

    const helper = (cur: number[], start: number) => {
        res.push([...cur])

        for (let i = start; i < nums.length; i++) {
            cur.push(nums[i])
            helper(cur, i + 1)
            cur.pop()
        }
    }

    helper([], 0)
    return res
}
