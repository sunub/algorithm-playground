"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tallestBillboard(rods) {
    const res = [];
    const helper = (cur, start) => {
        res.push([...cur]);
        for (let i = start; i < rods.length; i++) {
            cur.push(rods[i]);
            helper(cur, i + 1);
            cur.pop();
        }
    };
    helper([], 0);
}
console.log(tallestBillboard([1, 2, 3, 6]));
//# sourceMappingURL=app.js.map