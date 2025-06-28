
var reverseBetween = function (head, left, right) {
    if (!head || left === right) return head;

    let dummy = new ListNode(0, head);
    let prev = dummy;

    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }
    let current = prev.next;
    let next = null;
    for (let i =0; i <right-left; i++) {
        next = current.next;
        current.next = next.next;

        next.next = prev.next;
        prev.next = next;
    }
    return dummy.next;
};

Tips for remembering
Use dummy node.
Advance prev to node before reversal.
Use head insertion within the sublist.
Loop right - left times.





