var twoSum = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
};
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        const currentWindow = s.slice(start, end);

        const indexInWindow = currentWindow.indexOf(char);
        if (indexInWindow !== -1) {
            start = start + indexInWindow + 1;
        }

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const seen = new Set();
    let start = 0;
    let maxLength = 0;

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        while (seen.has(char)) {
            seen.delete(s[start]);
            start++;
        }

        seen.add(char);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let area = 0;

    while (i < j) {
        const current = (j - i) * Math.min(height[i], height[j]);
        area = Math.max(area, current);

        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return area;
};
