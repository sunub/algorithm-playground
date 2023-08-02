var permute = function (nums: number[]) {
    const answer: number[][] = []
    backtracking(
        [],
        Array.from({ length: nums.length }, () => false)
    )
    return answer

    function backtracking(curr: number[], visit: boolean[]) {
        if (curr.length === nums.length) {
            answer.push([...curr])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (visit[i]) continue
            curr.push(nums[i])
            visit[i] = true
            backtracking(curr, visit)
            curr.pop()
            visit[i] = false
        }
    }
}

console.log(permute([1, 2, 3]))
