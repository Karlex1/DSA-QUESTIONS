var maxSubArray = function(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
};
var maxProduct = function(nums) {
    let max = nums[0];
    let min = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            let temp = max;
            max = min;
            min = temp;
        }
        max = Math.max(nums[i], max * nums[i]);
        min = Math.min(nums[i], min * nums[i]);

        result = Math.max(result, max);
    }

    return result;
};
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;

    let product = 1;
    let j = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        product *= nums[i];

        while (product >= k && j <= i) {
            product /= nums[j];
            j++;
        }

        count += i - j + 1;
    }

    return count;
};
var searchInsert = function(nums, k) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        
        if (k > nums[mid]) {
            start = mid + 1;
        } else if (k < nums[mid]) {
            end = mid - 1;
        } else {
            return mid;
        }
    }

    return start;
};
var searchRange = function(nums, target) {
    function findBound(isFirst) {
        let left = 0;
        let right = nums.length - 1;
        let bound = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                bound = mid;
                if (isFirst) {
                    right = mid - 1; // keep searching on the left
                } else {
                    left = mid + 1; // keep searching on the right
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return bound;
    }

    const first = findBound(true);
    const last = findBound(false);

    return [first, last];
};
