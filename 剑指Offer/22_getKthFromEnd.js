/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let curr = head
    let prev = head
    let i = 0
    while(i++ < k) {
        curr = curr.next
    }

    while(curr) {
        curr = curr.next
        prev = prev.next
    }

    return prev
};