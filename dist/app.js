"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var s = function (asteroids) {
    for (let i = 1; i < asteroids.length; i++) {
        const direction1 = Math.sign(asteroids[i - 1]);
        const direction2 = Math.sign(asteroids[i]);
        if (direction1 + direction2 === 0 && asteroids[i - 1] > asteroids[i]) {
            const abs1 = Math.abs(asteroids[i - 1]);
            const abs2 = Math.abs(asteroids[i]);
            if (abs1 === abs2) {
                asteroids.splice(i - 1, 2);
            }
            else if (abs2 < abs1) {
                asteroids.splice(i, 1);
            }
            else if (abs2 > abs1) {
                asteroids.splice(i - 1, 1);
            }
            i = 0;
        }
    }
    return asteroids;
};
console.log(s([10, 2, -5]));
//# sourceMappingURL=app.js.map