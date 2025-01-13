class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int n1 = nums1.length;
        int n2 = nums2.length;
        
        int k = 0;
        int i = 0;
        int j = 0;
        int[] arr = new int[n1+n2];

        // Merge the two arrays into one sorted array
        while (i < n1 && j < n2) {
            if (nums1[i] < nums2[j]) {
                arr[k++] = nums1[i++];
            } else {
                arr[k++] = nums2[j++];
            }
        }

        // Add remaining elements from nums1
        while (i < n1) {
            arr[k++] = nums1[i++];
        }

        // Add remaining elements from nums2
        while (j < n2) {
            arr[k++] = nums2[j++];
        }

        // Calculate the median
        int mid = arr.length/ 2;
        if (arr.length % 2 == 0) {
            return (arr[mid - 1] + arr[mid]) / 2.0;
        } else {
            return arr[mid];
        }
    }
}
