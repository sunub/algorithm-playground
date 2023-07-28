var PredictTheWinner = function(nums: number[]) {
    const dp = Array.from({ length: nums.length }, () => Array.from({ length: nums.length }, () => 0))
    console.log(dp)
};
console.log(PredictTheWinner([1,5,233,7]))
