// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
// Sort than map the sort value as key and index as value.
class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        int n = nums.length;
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        int[] ans = new int[n];
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < n; i++) {
            map.putIfAbsent(sorted[i], i);
        }
        for(int i=0;i<n;i++){
            ans[i]=map.get(nums[i]);
        }
        // for(int i=0;i<n;i++){int count =0;
        // for(int j=0;j<n;j++){
        // if(i==j)continue;
        // if(nums[j]<nums[i]){
        // count++;
        // }
        // }
        // ans[i]=count;

        // }
        return ans;
    }
}
