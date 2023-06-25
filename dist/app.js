"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countRoutes(locations, start, finish, fuel) {
    function solve(currCity, finish, remainFuel, memo) {
        if (remainFuel < 0) {
            return 0;
        }
        if (memo[currCity][remainFuel] !== -1) {
            return memo[currCity][remainFuel];
        }
        let answer = currCity === finish ? 1 : 0;
        for (let nextCity = 0; nextCity < locations.length; nextCity++) {
            if (nextCity !== currCity) {
                answer =
                    (answer +
                        solve(nextCity, finish, remainFuel -
                            Math.abs(locations[currCity] - locations[nextCity]), memo)) %
                        (Math.pow(10, 9) + 7);
            }
        }
        return (memo[currCity][remainFuel] = answer);
    }
    const n = locations.length;
    const memo = Array.from({ length: n }, () => Array.from({ length: fuel + 1 }, () => -1));
    return solve(start, finish, fuel, memo);
}
console.log(countRoutes([2, 3, 6, 8, 4], 1, 3, 5));
//# sourceMappingURL=app.js.map