interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

function isValidBST(root: TreeNode): boolean {
    return validate(root, -Infinity, Infinity)
}

function validate(node, lower, upper) {
    if (node === null) {
        return true
    }

    if (lower < node.val && node.val < upper) {
        return (
            validate(node.left, lower, node.val) &&
            validate(node.right, lower, node.val)
        )
    } else {
        return false
    }
}
