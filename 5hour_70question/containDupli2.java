// 219. Contains Duplicate II
class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        HashSet<Integer> set = new HashSet<>();
        int j = 0;
        for(int i = 0;i < nums.length; i++){
            while(Math.abs(i-j) <= k && j < nums.length){
                if(set.contains(nums[j])){
                    return true;
                }
                set.add(nums[j]);
                j++;
            }
            set.remove(nums[i]);
        }
        return false;
    }
}
