// 673. Number of Longest Increasing Subsequence

// Given an integer array nums, return the number of longest increasing subsequences.
// Notice that the sequence has to be strictly increasing.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let n = nums.length, res = 0, maxLen = 0
    let len = Array(n), cnt = Array(n)

    for(let i = 0; i < n; i++){
        [len[i], cnt[i]] = [1, 1]
        for(let j = 0; j < i; j++){
            if(nums[i] > nums[j]){
                if(len[i] === len[j] + 1){
                    cnt[i] += cnt[j]
                }
                if(len[i] < len[j] + 1){
                    len[i] = len[j] + 1
                    cnt[i] = cnt[j]
                }
            }
        }
        if(maxLen === len[i]){
            res += cnt[i]
        }
        if(maxLen < len[i]){
            maxLen = len[i]
            res = cnt[i]
        }
    }
    return res
};