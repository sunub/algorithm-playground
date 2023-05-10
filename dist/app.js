"use strict";
function generateMatrix(n) {
    const answer = Array.from(Array(n), () => Array(n).fill(0));
    let count = 1;
    for (let layer = 0; layer < (n + 1) / 2; layer++) {
        for (let ptr = layer; ptr < n - layer; ptr++) {
            answer[layer][ptr] = count++;
        }
        for (let ptr = layer + 1; ptr < n - layer; ptr++) {
            answer[ptr][n - layer - 1] = count++;
        }
        for (let ptr = layer + 1; ptr < n - layer; ptr++) {
            answer[n - layer - 1][n - ptr - 1] = count++;
        }
        for (let ptr = layer + 1; ptr < n - layer - 1; ptr++) {
            answer[n - ptr - 1][layer] = count++;
        }
    }
    return answer;
}
generateMatrix(3);
//# sourceMappingURL=app.js.map