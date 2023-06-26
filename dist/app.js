"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const totalCost = (a, k, m) => {
    let pq = new MinPriorityQueue({
        compare: (x, y) => {
            if (x[0] != y[0])
                return x[0] - y[0];
            return x[1] - y[1];
        },
    });
    let n = a.length, l = 0, r = n - 1, res = 0;
    for (let i = 0; i < m; i++) {
        if (l <= r) {
            pq.enqueue([a[l], l]);
            l++;
        }
    }
    for (let i = 0; i < m; i++) {
        if (l <= r) {
            pq.enqueue([a[r], r]);
            r--;
        }
    }
    for (let i = 0; i < k; i++) {
        let cur = pq.dequeue();
        res += cur[0];
        if (cur[1] < l && l <= r) {
            pq.enqueue([a[l], l]);
            l++;
        }
        else if (cur[1] > r && l <= r) {
            pq.enqueue([a[r], r]);
            r--;
        }
    }
    return res;
};
console.log(totalCost([31, 25, 72, 79, 74, 65, 84, 91, 18, 59, 27, 9, 81, 33, 17, 58], 11, 2));
//# sourceMappingURL=app.js.map