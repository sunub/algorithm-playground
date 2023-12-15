class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

var partition = function (head, x) {
    let beforeHead = new ListNode(0)
    let before: any = beforeHead
    let afterHead = new ListNode(0)
    let after: any = afterHead

    let curr = head
    while (curr) {
        if (curr.val >= x) {
            after.val = curr
            after = after.next
        } else {
            before.next = curr
            before = before.next
        }

        curr = curr.next
    }

    after.next = null
    before.next = afterHead.next
    return before.next
}
