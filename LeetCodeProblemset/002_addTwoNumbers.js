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
var addTwoNumbers = function(l1, l2) {
    function add(node1,node2,increament){
        if (node1===null&&node2===null&&increament===0){
            return null
        }else {
            let sum = (node1?node1.val:0) +(node2?node2.val:0)+ increament
            let temp = new ListNode()
            temp.val = sum%10

            temp.next = add(node1?node1.next:null,node2?node2.next:null,Math.floor(sum/10))
            
            return temp
        }
    }
    return add(l1,l2,0)
};