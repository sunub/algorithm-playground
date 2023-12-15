function singleNonDuplicate(nums: number[]) {
    let ptr1 = 0
    while (ptr1 < nums.length) {
        let ptr2 = ptr1 + 1
        while (ptr2 < nums.length) {
            if (nums[ptr1] === nums[ptr2]) {
                nums.splice(ptr1, 2)
            } else {
                ptr2 += 1
            }
        }
        ptr1 += 1
    }
    return nums[0]
}

// 숫자가 최대 2번까지 반복되는 정렬 된 숫자의 배열이 주어질 경우 그 배열 중
// 반복되지 않는 숫자는 무엇인지 찾아낼 것
const exam = [2, 2, 3, 4, 4, 5, 5, 6, 6]
// 실행시간은 log2(n), 메모리는 O(1)만큼 사용하여 해결할 것
