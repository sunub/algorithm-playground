/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
    let prefixSum = 0;
    let longestSubarray = 0;
    const indices = new Map();

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        if (prefixSum === k) {
            longestSubarray = i + 1;
        }

        // prefixSum - k가 갖는 의미가 중요하다. prefixSum - k가 indices에 있다는 것은 prefixSum - (prefixSum - k) = k가 지금까지 탐색한 배열내에 부분합이 k인 하위 배열이 존재한다는 것이다. 이것이 가능한 것은 여기서 k 값 또한 prefixSum 값을 의미하기 때문이다. 문제에서 요구한 것은 부분배열들의 값이 k 인 것을 요구하기 때문에 k 값 또한 prefixSum인 것이고 지금까지의 인덱스의 prefixSum 값에 k 값을 뺀 값을 지금까지 탐색한 값들을 저장한 map에 존재한 다는 것은 그 사이의 합이 k인 부분배열이 존재한다는 이야기이다.
        if (indices.has(prefixSum - k)) {
            longestSubarray = Math.max(
                longestSubarray,
                i - indices.get(prefixSum - k)
            );
        }

        if (!indices.has(prefixSum)) {
            indices.set(prefixSum, i);
        }
    }

    return longestSubarray;
};
console.log(maxSubArrayLen([-2, -1, 2, 1], 1));
