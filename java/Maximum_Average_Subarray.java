//Sliding window
// import java.util.*;

// class Solution {
//     public double findMaxAverage(int[] nums, int k) {
//         int n = nums.length;
//         double max = 0.00000;
//         for (int i = 0; i <=n-k; i++) { int sum = 0;
//             for (int j = i; j < i + k; j++) {
               
//                 sum += nums[j];
               
//             } double avg =(double) sum / k;
//                 max=Math.max(max, avg);
//         }
//         return max;
//     }
// }
class Solution {
    public static double findMaxAverage(int[] nums, int k) {
        int sum = 0;

        for (int i = 0; i < k; i++) {
            sum += nums[i];
        }

        int maxSum = sum;

        for (int i = k; i < nums.length; i++) {
            sum += nums[i] - nums[i - k];  
            maxSum = Math.max(maxSum, sum);
        }

        return (double) maxSum / k;
            }}
