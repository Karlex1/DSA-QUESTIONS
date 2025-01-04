class Solution {
    public int search(int[] nums, int target) {
        int pivoti = pivot(nums);
        int start = 0;
        if (pivoti == -1) {
            return binarysearch(nums, target, 0, nums.length - 1);
        }
        if (nums[pivoti] == target) {
            return pivoti;
        }
        if (target >= nums[start]) {
            return binarysearch(nums, target, 0, pivoti - 1);
        }
        
            return binarysearch(nums, target, pivoti + 1, nums.length - 1);
        
        
    }

    static int binarysearch(int[] arr, int target, int start, int end) {
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] < target) {
                start = mid + 1;
            } else if (arr[mid] > target) {
                end = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }

    public int pivot(int[] nums) {
        int start = 0;
        int end = nums.length - 1;
        while (end >= start) {
            int mid = start + (end - start) / 2;
            if (mid < end && nums[mid] > nums[mid + 1]) {
                return mid;
            }
            if (mid > start && nums[mid] < nums[mid - 1]) {
                return mid - 1;
            }
            if (nums[mid] <= nums[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return -1;
    }
}
