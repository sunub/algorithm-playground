"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxConsecutiveAnswers(answerKey, k) {
    let answer = -Infinity;
    for (let left = 0; left < answerKey.length; left++) {
        let curType = answerKey[left], right = left + 1, valid = 0, length = 1;
        while (valid <= k && right < answerKey.length) {
            if (curType === answerKey[right]) {
                length += 1;
            }
            else {
                valid += 1;
                if (valid > k) {
                    break;
                }
                length += 1;
            }
            right += 1;
        }
        if (valid < k) {
            let r = left;
            while (valid <= k && r >= 0) {
                if (answerKey[r] === curType) {
                    length += 1;
                }
                else {
                    valid += 1;
                    if (valid > k) {
                        break;
                    }
                    length += 1;
                }
                r -= 1;
            }
        }
        answer = Math.max(answer, length);
    }
    return answer;
}
console.log(maxConsecutiveAnswers("TTFTTFTT", 1));
//# sourceMappingURL=app.js.map