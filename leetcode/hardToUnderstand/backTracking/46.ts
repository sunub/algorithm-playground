// 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

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
