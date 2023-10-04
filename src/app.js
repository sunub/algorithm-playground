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

console.log(winnerOfGame("BBBAAAABB"));
