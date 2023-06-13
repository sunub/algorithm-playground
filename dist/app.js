"use strict";
function equalPairs(grid) {
    const n = grid.length;
    let answer = 0;
    const memo = new Map();
    for (let i = 0; i < n; i++) {
        let rowNum = grid[i].join(" ");
        for (let j = 0; j < n; j++) {
            let colNum = getColNum(0, j);
            if (rowNum === colNum) {
                answer += 1;
            }
        }
    }
    function getColNum(col, row) {
        if (memo.has(col)) {
            return memo.get(col);
        }
        let colNum = [];
        while (col < n) {
            colNum.push(grid[col + 1][row]);
            col += 1;
        }
        memo.set(col, colNum);
        return colNum.join(" ");
    }
    return answer;
}
console.log(equalPairs([
    [11, 1],
    [1, 11],
]));
//# sourceMappingURL=app.js.map