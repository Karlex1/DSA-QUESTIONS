//Leetcode 2215
import java.util.*;

class Solution {
    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
        
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();

        for (int num : nums1) {
            set1.add(num);
        }

        for (int num : nums2) {
            // If num is in set1, it's not unique to nums2
            if (set1.contains(num)) {
                set1.remove(num); // Remove common element
            } else {
                set2.add(num); // Add unique element to nums2 set
            }
        }
        for (int num: nums1){
            if(set2.contains(num)){
                set2.remove(num);
            }
        }

        // Convert remaining elements in set1 and set2 to lists
        List<List<Integer>> result = new ArrayList<>();
        result.add(new ArrayList<>(set1));
        result.add(new ArrayList<>(set2));

        return result;
    }
}
