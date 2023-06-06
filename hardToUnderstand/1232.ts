// 1232. Check If It Is a Straight Line

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

/**
 * @argument { Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] }
 * @returns { Output: true }
 */

/**
 * @argument { Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]] }
 * @returns { Output: false }
 */

var checkStraightLine = function (coordinates) {
    function getXDiff(a, b) {
        return a[1] - b[1]
    }

    function getYDiff(a, b) {
        return a[0] - b[0]
    }

    let deltaY = getYDiff(coordinates[1], coordinates[0])
    let deltaX = getXDiff(coordinates[1], coordinates[0])

    for (let i = 2; i < coordinates.length; i++) {
        if (
            deltaY * getXDiff(coordinates[i], coordinates[0]) !==
            deltaX * getYDiff(coordinates[i], coordinates[0])
        ) {
            return false
        }
    }
    return true
}
