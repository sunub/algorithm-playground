// 92. Reverse Linked List II

// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (left >= right) return head

    const needToChangeNode = []

    let n = head,
        isLeft = false,
        i = 1
    while (n) {
        if (!isLeft && i === left) {
            isLeft = true
            needToChangeNode.push(n.val)
        } else if (isLeft) {
            needToChangeNode.push(n.val)
            if (i === right) {
                break
            }
        }
        n = n.next
        i += 1
    }

    ;(isLeft = false), (i = 1)
    for (let node = head; node !== null; node = node.next) {
        if (i === left) {
            isLeft = true
            node.val = needToChangeNode.pop()
        } else if (isLeft && needToChangeNode.length) {
            node.val = needToChangeNode.pop()
        }
        i += 1
    }

    return head
}

var betterSolution = function (head, left, right) {
    let dummy = new ListNode(0, head)

    let leftPrev = dummy
    let curr = head
    let prev = null

    for (let i = 0; i < left; i++) {
        curr = curr.next
        leftPrev = leftPrev.next
    }

    for (let i = 0; j < right - left; i++) {
        let tmp = curr.next
        curr.next = prev
        prev = curr
        curr = tmp
    }

    leftPrev.next.next = curr
    leftPrev.next = prev

    return leftPrev
}
