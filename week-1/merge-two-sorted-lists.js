/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let newHead = null;
    let l1 = list1, l2 = list2;
    if(!l1) return l2;
    if(!l2) return l1;
    if(l1.val < l2.val) {
        newHead = l1;
        l1 = l1.next;
    } else {
        newHead = l2;
        l2 = l2.next;
    }
    let current = newHead;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        } 
        current = current.next;
    }
    if (l1 || l2) {
        current.next = (l1 || l2);
    }
    return newHead;
};