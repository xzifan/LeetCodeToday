/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var prev = null
    var curr = head
    while (curr){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    return prev
};

// *****Recursive
// var reverseList = function(head) {
//     if(head.next.next===null){
//         return head
//     }else{
//         var temp = reverseList(head.next)
//         head.next.next = head
//         head.next = null
//         return temp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
//     }
// }