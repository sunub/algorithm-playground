// 735. Asteroid Collision

// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Input: asteroids = [5,10,-5]
// Output: [5,10]

// Input: asteroids = [8,-8]
// Output: []

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    for (let i = 1; i < asteroids.length; i++) {
        const direction1 = Math.sign(asteroids[i - 1])
        const direction2 = Math.sign(asteroids[i])

        if (direction1 + direction2 === 0 && asteroids[i - 1] > asteroids[i]) {
            const abs1 = Math.abs(asteroids[i - 1])
            const abs2 = Math.abs(asteroids[i])

            if (abs1 === abs2) {
                asteroids.splice(i - 1, 2)
            } else if (abs2 < abs1) {
                asteroids.splice(i, 1)
            } else if (abs2 > abs1) {
                asteroids.splice(i - 1, 1)
            }

            i = 0
        }
    }

    return asteroids
}

const stack = function (asteroid) {}
