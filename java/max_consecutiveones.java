//Approach Sliding Window     we will count the zero rather than 1 
// put poiter i,jat the 0index and move jforward(expand) and increase zerocounter if encounter 0 at nums[j]. 
// if zerocounter>k then check if nums[i]==0 then remove that count from zeroCounter i.e;decrease counterr and move i forward
// maxlen would be max of prev and current(j-i+1)


class Solution {
    public int longestOnes(int[] nums, int k) {
        int left = 0, right = 0, maxLen = 0, zeroCount = 0;

        while (right < nums.length) {
            if (nums[right] == 0) {
                zeroCount++;
            }

            while (zeroCount > k) {
                if (nums[left] == 0) {
                    zeroCount--;
                }
                left++;
            }

            maxLen = Math.max(maxLen, right - left + 1);
            right++;
        }

        return maxLen;
    }
}
