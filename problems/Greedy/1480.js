function runningSum(nums) {
  let answer = [nums[0]];
  nums.reduce((prev, curv) => {
    let sum = prev + curv;
    answer.push(sum);
    return prev + curv;
  });
}

// reduce를 이용하는것 보다 for loop 를 이용하는게 더 효율적이다.

function runningSum(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      result.push(nums[i]);
    } else {
      result.push(result[i - 1] + nums[i]);
    }
  }
  return result;
}

function runningSum(nums) {
  return nums.map((_, index) =>
    nums.slice(0, index + 1).reduce((acc, _num) => _num + acc, 0)
  );
}
