// 456. 132 Pattern
// Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

// Return true if there is a 132 pattern in nums, otherwise, return false.
// Example 1:

// Input: nums = [1,2,3,4]
// Output: false
// Explanation: There is no 132 pattern in the sequence.
// Example 2:

// Input: nums = [3,1,4,2]
// Output: true
// Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
// Example 3:

// Input: nums = [-1,3,2,0]
// Output: true
// Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    const st = [];
    let cur_min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const n = nums[i];
        while (st.length && n >= st[st.length - 1][0]) {
            st.pop();
        }

        if (st.length && n > st[st.length - 1][1]) {
            return true;
        }

        st.push([n, cur_min]);
        cur_min = Math.min(cur_min, n);
    }

    return false;    
};
