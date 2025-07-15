/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReachable = 0;

    for (let i = 0; i < nums.length; i++) {
        // If the current index is beyond the farthest reachable point, you can't proceed
        if (i > maxReachable) return false;

        // Update the farthest reachable point so far
        maxReachable = Math.max(maxReachable, i + nums[i]);

        // If we've already reached or passed the last index
        if (maxReachable >= nums.length - 1) return true;
    }

    return true;
};

var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    return Math.max(
        robLinear(nums, 0, nums.length - 2),
        robLinear(nums, 1, nums.length - 1)
    );
};

function robLinear(nums, start, end) {
    let prev2 = 0;
    let prev1 = 0;
    for (let i = start; i <= end; i++) {
        let curr = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}
