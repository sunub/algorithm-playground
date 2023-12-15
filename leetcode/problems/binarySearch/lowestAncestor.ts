interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

type BinaryTree = TreeNode | null

function lowestCommonAncestor(root: any, p: any, q: any): any {
    while (root) {
        if (root.val > p.val && root.val > q.val) {
            root = root.left
        } else if (root.val < p.val && root.val < q.val) {
            root = root.right
        } else {
            break
        }
    }
    return root
}

function otherSolution(root: any, p: any, q: any): any {
    // 이 경우 최초의 노드가 p와 q 사이의 노드가 된다.
    if (root.val > p.val && root.val < q.val) {
        return root
        // 범위를 정해서 노드가 왼쪽 혹은 오른쪽 어느 위치에 존재하는지 파악하고 root.val이 p와 q와 같은 경우에는 해당 root를 반환한다.
    } else if (root.val > p.val && root.val > q.val) {
        return otherSolution(root.right, p, q)
    } else if (root.val < p.val && root.val < q.val) {
        return otherSolution(root.left, p, q)
    }
    return root
}
