/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var beautifulSubsets = function(nums, k) {
    
// };
var beautifulSubsets = function(nums, k) {
    let res = 0;
    let curr = [];

    nums.sort((a, b) => a - b); // Ensure binary search and consistent ordering

    const binarySearch = (arr, target) => {
        let left = 0, right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) return true;
            else if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return false;
    };

    const backtrack = (i) => {
        if (i === nums.length) return;

        // Option 1: Include nums[i]
        // Binary search in curr to check if (nums[i] - k) exists
        if (!binarySearch(curr, nums[i] - k)) {
            curr.push(nums[i]);
            res++;
            backtrack(i + 1);
            curr.pop();
        }

        // Option 2: Skip nums[i]
        backtrack(i + 1);
    };

    backtrack(0);
    return res;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = []
    let curr = []
    
    var backtrack = (i)=>{
        if (i===nums.length){
            result.push([...curr]);
            return;
        }
        curr.push(nums[i])
        backtrack(i+1)
        curr.pop()
        backtrack(i+1)
    }
    backtrack(0)
    return result;
};

/**

 * @param {number[]} nums

 * @return {number[][]}

 */

var subsetsWithDup = function (nums) {

   nums.sort((a,b)=>a-b)

    let res = [], curr = [];

    const backtrack = (start) => {

        // if(i===nums.length){

        res.push([...curr]);

        // }

        for (let i = start; i < nums.length; i++) {

            if (i > start && nums[i] === nums[i - 1]) continue;

            curr.push(nums[i]);

            backtrack(i+1);

            curr.pop();

            // curr.push(nums[i]);

            // backtrack(i+1);

            // curr.pop();

            // backtrack(i+1)

        }

    }

    backtrack(0);

    return res;

}; 
