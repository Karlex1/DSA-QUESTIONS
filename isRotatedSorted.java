// Dekho agar rotated hain toh last element first se bada nahi hoga (for increasing sorted) and drop count would be only one so when drop is >1 then false
// otherwise true
class Solution {
    public boolean check(int[] nums) {
        int count = 0;
        int n = nums.length;
        if (nums[0] < nums[n - 1]) {
            count++;
        }
        for (int i = 0; i < n-1; i++) {

            if (nums[i] > nums[i + 1]) {
                count++;
            }
            if(count>1) return false;
        }
        return true;

    }
}
