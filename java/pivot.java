class Solution {
    public int pivotIndex(int[] nums) {
        int sum=0;
        for(int num:nums){
            sum+=num;
        }
        int left=0;
        for(int i=0;i<nums.length;i++){
            if(i==0) left=0;
            int right=sum-left-nums[i];
            if(right==left){
                return i;
            }
            left+=nums[i];
        }
        return -1;
    }
}
