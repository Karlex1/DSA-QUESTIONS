class Solution {
    public int missingNumber(int[] nums) {
        int xora = 0;
        int xorb = 0;
        for (int j = 0; j <= nums.length ; j++) {
            xora ^= j;
        }
        for (int j = 0; j < nums.length; j++) {
            xorb ^= nums[j];
        }
        return(xora ^ xorb);
    }
}
