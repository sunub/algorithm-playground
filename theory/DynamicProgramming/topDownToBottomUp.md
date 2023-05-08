주로 Top-down보다 Bottom-up의 경우가 더 효율적인 방법입니다. Top-down의 경우
Iterative, 처음부터 끝까지 나열하는 방식으로 문제를 해결합니다. 이렇게 문제를
해결해 나갈 경우 같은 방식을 반복할 수 있다는 문제가 발생합니다.

-   Topdown에서 Bottom-up으로 전환하는 방법

1. 우선 Top-down을 방법으로 문제를 구현하기 시작한다.

2. 주어지는 변수의 크기에 맞춰 같은 사이즈의 배열 dp를 생성한다. 예를 들어 특정 길이의 배열 nums와 최대 실행 횟수의 제한을 두는 k가 주어졌다면 배열 dp는 2차원의 배열로 k의 길이를 갖고 각 차원의 배열의 길이는 nums.length의 길이를 지니는 dp를 만들어야 한다. 그리고 주어지는 각각의 반환 값에 대한 초기값은 문제가 요구하는 값의 정반대의 값으로 지정해야 한다. 최대값을 요구할 경우 -Infinity로 지정해야 한다.

3. 하양식의 경우도 상향식의 경우와 같이 기본 base를 찾아야 한다. House Robber의 문제의 경우로 예시를 생각하였을 때 정답을 반환하는 함수 DP()가 있을 때, DP(0) = nums[0], DP(1) = max(nums[0], nums[1])과 같은 base를 찾아야 한다.

4. 상태 변수에 대해 반복되는 for 루프를 작성합니다. 상태 변수가 여러 개인 경우에는 중첩된 for-loop이 필요합니다. 이러한 루프는 기본 사례에서 반복되기 시작해야 합니다.

5. 이제 for-loop 내부에 문제 해결에 필요한 함수의 논리를 복사하여 배열에 접근할 수 있게끔 함수 호출을 변경해야 한다.

## 상향식 DP 문제 해결 방식

```typescript
function HouseRobber(nums: number[]) {
    const map: Map<number, number> = new Map()
    const memo: Map<number, number> = new Map()

    function dp(i: number) {
        if (i === 0) return nums[0]
        if (i === 1) return Math.max(nums[0], nums[1])
        if (!memo.has(i)) {
            memo.set(i, Math.max(dp(i - 1), dp(i - 2) + nums[i]))
        }
        return memo.get(i)
    }

    return dp(nums.length - 1)
}
```

## 하향식 DP 문제 해결 방식

```typescript
function HouseRobber(nums: number[]) {
    if (nums.length === 1) {
        return nums[0]
    }

    const dp = Array.from({ length: nums.length }).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }

    return dp[nums.length - 1]
}
```
