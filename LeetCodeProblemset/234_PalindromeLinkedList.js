/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let values = []
    while (head != null){
        values.push(head.val)
        head = head.next
    }

    for (let i = 0, j=values.length-1; i < values.length; i++,j--) {
        if (values[i] != values[j])    return false
    }

    return true
};