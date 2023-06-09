function minimumTotal(triangle: number[][]): number {
    const flatten = triangle.flat(1)

    for (let i = flatten.length - 1; i >= 0; i -= 2) {
        let peak = i - 2
        flatten[peak] = Math.min(
            flatten[peak] + flatten[i],
            flatten[peak] + flatten[i - 1]
        )
    }
}
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
