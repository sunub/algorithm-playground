function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    //creating two seperate linked list and then merging it.
    let beforeHead = new ListNode(0)
    let before = beforeHead
    let afterHead = new ListNode(0)
    let after = afterHead

    let current = head
    while (current) {
        if (current.val < x) {
            before.next = current
            before = before.next
        } else {
            after.next = current
            after = after.next
        }
        current = current.next
    }

    after.next = null // this is important to remove any old links
    console.log(afterHead)
    before.next = afterHead.next
    return beforeHead.next
}
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
