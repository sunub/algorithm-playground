function sortedListToBST(head) {
    if (head == null) {
        return null
    }

    let mid = findMiddleElement(head)
    let node = new TreeNode(mid.val)

    if (head == mid) {
        return node
    }

    node.left = sortedListToBST(head)
    node.right = sortedListToBST(mid.next)
    return node
}

function findMiddleElement(head) {
    let prevPtr = null
    let slowPtr = head
    let fastPtr = head

    while (fastPtr !== null && fastPtr.next !== null) {
        prevPtr = slowPtr
        slowPtr = slowPtr.next
        fastPtr = fastPtr.next.next
    }

    if (prevPtr !== null) {
        prevPtr.next = null
    }

    return slowPtr
}
