class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            // if(set.contains(num)){
            // return true;
            // }
            set.add(num);
        }
        if (set.size() == nums.length) {
            return false;
        }
        return true;
    }
}
