// 445. Add Two Numbers II

// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [8,0,7]

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null) => {
    const s1: any = [],
        s2: any = []

    while (l1 !== null) {
        s1.push(l1.val)
        l1 = l1.next
    }

    while (l2 !== null) {
        s2.push(l2.val)
        l2 = l2.next
    }

    let totalSum = 0,
        carry = 0
    let answer = new ListNode()

    while (s1.length || s2.length) {
        if (s1.length) {
            totalSum += s1.pop()
        }
        if (s2.length) {
            totalSum += s2.pop()
        }

        answer.val = totalSum % 10
        carry = Math.floor(totalSum / 10)
        const head = new ListNode(carry)
        head.next = answer
        answer = head
        totalSum = carry
    }

    return carry === 0 ? answer.next : answer
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var usingReversedLinkedList = function (l1, l2) {
    l1 = reverseLinkedList(l1.next, new ListNode(l1.val))
    l2 = reverseLinkedList(l2.next, new ListNode(l2.val))

    let l: any = addTwoNumbersOld(l1, l2)

    return reverseLinkedList(l.next, new ListNode(l.val))
}

function reverseLinkedList(l, reverse) {
    if (!l) return reverse

    let reverseNew = new ListNode(l.val)
    reverseNew.next = reverse

    return reverseLinkedList(l.next, reverseNew)
}

var addTwoNumbersOld = function (l1, l2) {
    let pointer = new ListNode()
    let head = pointer
    let carry = 0

    while (l1 || l2) {
        let val1 = l1 === null ? 0 : l1.val
        let val2 = l2 === null ? 0 : l2.val
        let sum = val1 + val2 + carry
        console.log(val1, val2)
        if (sum > 9) carry = 1
        else carry = 0

        pointer.next = new ListNode(sum % 10)
        pointer = pointer.next
        l1 = l1 === null ? null : l1.next
        l2 = l2 === null ? null : l2.next
    }

    if (carry === 1) pointer.next = new ListNode(carry)

    return head.next
}
