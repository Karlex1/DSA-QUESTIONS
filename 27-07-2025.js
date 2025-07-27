// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var countHillValley = function (nums) {
//     let count = 0, cleaned = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== nums[i + 1]) {
//             cleaned.push(nums[i]);
//         }
//     }
//     for (let i = 1; i < cleaned.length - 1; i++) {
//         if (cleaned[i] > cleaned[i - 1] && cleaned[i] > cleaned[i+1]) {
//             count++;
//         }
//         if (cleaned[i] < cleaned[i - 1] && cleaned[i] < cleaned[i+1]) {
//             count++;
//         }
//     }



//     return count
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
    let count = 0;

    for (let i = 1; i < nums.length - 1; i++) {
        // Skip duplicates on the right
        let j = i + 1;
        while (j < nums.length && nums[j] === nums[i]) {
            j++;
        }

        if (j < nums.length) {
            if (nums[i] > nums[i - 1] && nums[i] > nums[j]) {
                count++; // Hill
            } else if (nums[i] < nums[i - 1] && nums[i] < nums[j]) {
                count++; // Valley
            }
        }
    }

    return count;
};
