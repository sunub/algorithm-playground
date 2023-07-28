"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PredictTheWinner = function (nums) {
    let player1 = 0;
    let player2 = 0;
    helper(player1, player2, nums, true);
    function helper(player1, player2, curnum, isPlayer1Turn) {
        while (curnum.length > 0) {
            if (isPlayer1Turn) {
                let case1 = helper(player1 + curnum[0], player2, curnum.slice(1), !isPlayer1Turn);
                let case2 = helper(player1 + curnum[1], player2, curnum.slice(0, curnum.length - 1), !isPlayer1Turn);
            }
            else {
                let case3 = helper(player1, player2 + curnum[0], curnum.slice(1), !isPlayer1Turn);
                let case4 = helper(player1, player2 + curnum[1], curnum.slice(0, curnum.length - 1), !isPlayer1Turn);
            }
        }
        return player1 > player2 ? true : false;
    }
};
console.log(PredictTheWinner([1, 5, 233, 7]));
const a = [1, 2, 3, 4, 5];
console.log(a.splice(0, a.length - 1));
//# sourceMappingURL=app.js.map