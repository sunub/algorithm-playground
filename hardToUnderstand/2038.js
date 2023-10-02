// 2038. Remove Colored Pieces if Both Neighbors are the Same Color
// There are n pieces arranged in a line, and each piece is colored either by 'A' or by 'B'. You are given a string colors of length n where colors[i] is the color of the ith piece.

// Alice and Bob are playing a game where they take alternating turns removing pieces from the line. In this game, Alice moves first.

// Alice is only allowed to remove a piece colored 'A' if both its neighbors are also colored 'A'. She is not allowed to remove pieces that are colored 'B'.
// Bob is only allowed to remove a piece colored 'B' if both its neighbors are also colored 'B'. He is not allowed to remove pieces that are colored 'A'.
// Alice and Bob cannot remove pieces from the edge of the line.
// If a player cannot make a move on their turn, that player loses and the other player wins.
// Assuming Alice and Bob play optimally, return true if Alice wins, or return false if Bob wins.

// Example 1:

// Input: colors = "AAABABB"
// Output: true
// Explanation:
// AAABABB -> AABABB
// Alice moves first.
// She removes the second 'A' from the left since that is the only 'A' whose neighbors are both 'A'.

// Now it's Bob's turn.
// Bob cannot make a move on his turn since there are no 'B's whose neighbors are both 'B'.
// Thus, Alice wins, so return true.

/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
    if (colors.length <= 2) return false;

    const map = new Map();

    for (let i = 0; i < colors.length; i++) {
        map.has(colors[i])
            ? map.set(colors[i], [...map.get(colors[i]), i])
            : map.set(colors[i], [i]);
    }

    if (!map.has("A")) return false;
    if (!map.has("B")) return true;

    let answer = true;
    let aNum = [...map.get("A")];
    let bNum = [...map.get("B")];
    let aOrder = true;
    for (let i = 0; i < colors.length; i++) {
        if (aOrder) {
            const aResult = runningGame(aNum);
            if (aResult === -1) {
                answer = false;
                break;
            }
            [aNum, aOrder] = [setGameResult(aNum, aResult), false];
            aOrder = false;
        } else {
            const bResult = runningGame(bNum);
            if (bResult === -1) {
                answer = true;
                break;
            }
            [bNum, bOrder] = [setGameResult(bNum, bResult), true];
            aOrder = true;
        }
    }

    return answer;
};

function setGameResult(curr, result) {
    return [...curr.slice(0, result), ...curr.slice(result + 1, curr.length)];
}

function runningGame(currNum) {
    if (currNum.length <= 2) return -1;

    for (let i = 1; i < currNum.length; i++) {
        if (
            currNum[i - 1] === currNum[i] - 1 &&
            currNum[i + 1] === currNum[i] + 1
        ) {
            for (let j = 0; j < i; j++) {
                currNum[j] += 1;
            }
            return i;
        }
    }
    return -1;
}
