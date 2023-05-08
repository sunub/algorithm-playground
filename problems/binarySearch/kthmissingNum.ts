function findKthPositive(arr: number[], k: number): number {
    let left = 0,
        right = arr.length - 1
    while (left <= right) {
        let pivot = Math.floor((left + right) / 2)

        if (arr[pivot] - pivot - 1 < k) {
            left = pivot + 1
        } else {
            right = pivot - 1
        }
    }
    return left + k
}
