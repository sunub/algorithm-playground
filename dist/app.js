"use strict";
var swapNodes = function (head, k) {
    const nodes = [];
    const queue = [head];
    while (queue.length) {
        const node = queue.pop();
        nodes.push(node.val);
        if (node.next !== null) {
            queue.push(node.next);
        }
    }
    let answer = { val: nodes.shift(), next: null };
    const left = nodes[k - 1];
    const right = nodes[nodes.length - k];
    [nodes[k - 1], nodes[nodes.length - k]] = [right, left];
    answer.next = insert(nodes);
    return answer;
};
function insert(nodes) {
    let a = { val: 0, next: null };
    if (nodes.length) {
        a.val = nodes.shift();
        a.next = insert(nodes);
    }
    return a;
}
const ListNode = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                },
            },
        },
    },
};
swapNodes(ListNode, 2);
//# sourceMappingURL=app.js.map