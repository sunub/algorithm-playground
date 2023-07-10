// 111. Minimum Depth of Binary Tree

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Input: root = [3,9,20,null,null,15,7]
// Output: 2

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

class TreeNode {
    val: number | null
    left: TreeNode | null
    right: TreeNode | null
}

var minDepth = function (root: TreeNode) {
    if (root == null) {
        return 0
    }

    const queue: [[TreeNode, number]] = [[root, 1]]
    let answer = Infinity
    while (queue.length) {
        const [curr, floor] = queue.shift()!

        if (curr.left !== null && curr.left) {
            queue.push([curr.left, floor + 1])
        }
        if (curr.right !== null && curr.right) {
            queue.push([curr.right, floor + 1])
        }

        if (curr.left == null && curr.right == null) {
            answer = Math.min(answer, floor)
        }
    }
    return answer
}
