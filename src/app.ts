const removeDuplicates = function (nums) {
    let index = 0
    let duplicate = 1

    for (let traverse = 1; traverse < nums.length; traverse++) {
        if (nums[index] === nums[traverse]) {
            duplicate++
        } else {
            duplicate = 1
        }

        if (duplicate <= 2) {
            index++
            nums[index] = nums[traverse]
        }
    }

    nums.length = index + 1 // Truncate the array to remove duplicates
    console.log(nums)
    return index + 1
}

removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])

const n = [1, 2, 3, 4, 5, 6, 7]
n.length = 4
console.log(n)
