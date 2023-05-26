var flat = function (arr: number[], n: number) {
    if (!n) return arr

    let result = arr
    for (let i = 0; i < n; i++) {
        flatByOne(result)
    }

    function flatByOne(arr: number[][]) {
        let subresult = []
        let i = 0,
            len = arr.length
        while (i < len) {
            if (typeof arr[i] === "object") {
                let j = 0,
                    sublen = arr[i].length
                while (j < sublen) {
                    subresult.push(arr[i][j])
                    j++
                }
            } else subresult.push(arr[i])
            i++
        }
        result = [...subresult]
    }
    return result
}

console.log(flat([1, 2, [3, [4, [5, [6]]]]], 2))
