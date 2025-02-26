/*You are given an integer array nums. The absolute sum of a subarray [numsl, numsl+1, ..., numsr-1, numsr] is abs(numsl + numsl+1 + ... + numsr-1 + numsr).

Return the maximum absolute sum of any (possibly empty) subarray of nums.

Note that abs(x) is defined as follows:

If x is a negative integer, then abs(x) = -x.
If x is a non-negative integer, then abs(x) = x.

First we need to initialiZe variable maxSum with integer min and minsum with maxint because our array will 
have neg and pos.
apply kadane algo.
*/

class Solution {
    public int maxAbsoluteSum(int[] nums) {
        int n = nums.length;
        // for(int i=0;i<n;i++){
        // nums[i]=Math.abs(nums[i]);
        // }
        // int prefixSum=0;
        // int max=0;
        // int sum=0;
        // for(int i=0;i<n;i++){

        // }
        int maxSum = Integer.MIN_VALUE, minSum = Integer.MAX_VALUE;
        int maxSoFar = 0, minSoFar = 0;

        for (int num : nums) {
            maxSoFar = Math.max(num, maxSoFar + num);  // Kadane’s for max sum
            minSoFar = Math.min(num, minSoFar + num);  // Kadane’s for min sum

            maxSum = Math.max(maxSum, maxSoFar);
            minSum = Math.min(minSum, minSoFar);
        }
        
        return Math.max(maxSum, Math.abs(minSum)) ;
    }
}
