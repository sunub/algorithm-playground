// 530. Minimum Absolute Difference in BST

// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

/**
 * @argument { Input: root = [4,2,6,1,3] }
 * @returns { Output: 1 }
 */
/**
 * @argument { Input: root = [1,0,48,null,null,12,49] }
 * @returns { Output: 1 }
 */

var getMinimumDifference = function (root) {
    const queue: any[] = [root]
    const nodes: any[] = []

    let min = Number.MAX_SAFE_INTEGER
    while (queue.length) {
        const curr = queue.pop()!
        nodes.push(curr.val)

        if (curr.left !== null) {
            queue.push(curr.left)
        }
        if (curr.right !== null) {
            queue.push(curr.right)
        }
    }
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            min = Math.min(Math.abs(nodes[j] - nodes[i]), min)
        }
    }
    return min
}
