class Solution {
    public boolean isArraySpecial(int[] nums) {
        int flag = 0;
        int n = nums.length;
        for (int i = 0; i < n-1; i++) {
            int j = i + 1;
            if ((nums[i] & 1)==1) {
                if (nums[j] % 2 == 0) {
                    flag = 1;
                }
            } else if (nums[i] % 2 == 0) {
                if ((nums[j] & 1)==1) {
                    flag = 1;
                }
            }
            if(flag==0){
                return false;
            }
            flag=0;
        } return true;
    }
}
