// 863. All Nodes Distance K in Binary Tree

// Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

// You can return the answer in any order.

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
// Output: [7,4,1]

// Input: root = [1], target = 1, k = 3
// Output: []

var distanceK = function (root, target, K) {
    if (!root) return []
    const node = findTarget(root, null, target)
    const res = []
    findAllKApart(node, K, res)
    return res
}

function findTarget(root, parent, target) {
    if (!root) return null
    root.parent = parent
    if (root === target) {
        return root
    }
    return (
        findTarget(root.left, root, target) ||
        findTarget(root.right, root, target)
    )
}

function findAllKApart(root, k, res) {
    if (!root || root.visited) return res
    if (k == 0) {
        res.push(root.val)
        return res
    }
    root.visited = true
    findAllKApart(root.left, k - 1, res)
    findAllKApart(root.right, k - 1, res)
    findAllKApart(root.parent, k - 1, res)
    return res
}
