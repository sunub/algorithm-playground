// 239. Sliding Window Maximum
// Hard
// 16.2K
// 540
// company
// Amazon
// company
// Microsoft
// company
// Uber
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

var maxSlidingWindow = function (nums, k) {
    const q = [] // stores *indices*
    const res = []
    for (let i = 0; i < nums.length; i++) {
        while (q && nums[q[q.length - 1]] <= nums[i]) {
            q.pop()
        }
        q.push(i)
        // remove first element if it's outside the window
        if (q[0] === i - k) {
            q.shift()
        }
        // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
        if (i >= k - 1) {
            res.push(nums[q[0]])
        }
    }
    return res
}
