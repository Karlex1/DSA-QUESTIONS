/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {

// Bad approach

    // public int pairSum(ListNode head) {
    // ListNode temp=head;
    // int max=0;
    // if(head==null ){
    // return max;
    // }
    // if( head.next==null){
    // return head.val;
    // }
    // ArrayList<Integer> list=new ArrayList<>();
    // while(temp!=null){
    // list.add(temp.val);
    // temp=temp.next;
    // }
    // int n=list.size();
    // for(int i=0;i<n/2;i++){
    // int count=list.get(i)+list.get(n-i-1);
    // max=Math.max(max,count);
    // }
    // return max;
    // }
    // private int length(ListNode head){
    // ListNode temp=head;
    // int length=0;
    // while(temp!=null){
    // length++;
    // temp=temp.next;
    // }
    // return length;
    // }

// Real linked list Approach

    public int pairSum(ListNode head) {
        ListNode slow = head, fast = head, pre = null, curr = head;
        int ans = 0;
        // instead of going to mid and reversing second half
        // we simply can reverse first half till mid which reduce time
        while (fast != null) {
            fast = fast.next.next;
            curr = slow;
            slow = slow.next;
            curr.next = pre;
            pre = curr;
        }
        while (slow != null) {
            ans = Math.max(ans, pre.val + slow.val);
            slow = slow.next;
            pre = pre.next;
        }
        return ans;
    }
}
