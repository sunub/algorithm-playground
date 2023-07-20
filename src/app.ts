var findMinArrowShots = function (points: number[][]) {
    points.sort((a, b) => a[1] - b[1])

    let answer = 1
    let shootingPoint = points[0][1]
    for (let i = 1; i < points.length; i++) {
        if (shootingPoint < points[i][0] || shootingPoint > points[i][1]) {
            answer += 1
            shootingPoint = points[i][1]
        }
    }

    return answer
}
console.log(
    findMinArrowShots([
        [10, 16],
        [2, 8],
        [1, 6],
        [7, 12],
    ])
)
