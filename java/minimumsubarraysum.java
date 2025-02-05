// Note remember when other variable reach to end quickly then look is we have to shift inner quickly?

class Solution {
    public int minSubArrayLen(int k, int[] nums) {
        for(int num :nums){
            if(num==k){
                return 1;
            }
        }
        int sum=0;int length=Integer.MAX_VALUE;
        for(int i=0,j=0;j<nums.length;j++){
            sum+=nums[j];
            while(sum>=k){
                length=Math.min(length,j-i+1);
                sum-=nums[i++];
                
            }
        }
        return (length==Integer.MAX_VALUE)?0:length;
    }
}
