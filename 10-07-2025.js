/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    // Store mod => index
    let map = {0: -1}; 
    let prefix = 0;
    
    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i];
        let mod = prefix % k;
        
        if (mod in map) {
            // We have seen this mod before
            let prevIndex = map[mod];
            if (i - prevIndex >= 2) {
                return true;
            }
        } else {
            // Store first occurrence of this mod
            map[mod] = i;
        }
    }
    return false;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let maxlength = 0;
    let set = new Set(nums);
    for (let num of set) {
        if (!set.has(num - 1)) {
            let curr = num;
            let currL = 1;
            while (set.has(curr + 1)) {
                curr++;
                currL++;
            }
            maxlength = Math.max(currL, maxlength);
        }
        
    }
    return maxlength
}
var subarraySum = function(nums, k) {
    let map = {0: 1};
    let sum = 0, count = 0;

    for (let num of nums) {
        sum += num;
        if ((sum - k) in map) {
            count += map[sum - k];
        }
        map[sum] = (map[sum] || 0) + 1;
    }

    return count;
}

var subarraysDivByK = function(nums, k) {
    let map={0:1};
let prefix=0;
let count=0;
for(let i=0;i<nums.length;i++){
    prefix+=nums[i];
    let mod=((prefix%k)+k)%k;
    if(mod in map){
        count+=map[mod]
    }
    map[mod]=(map[mod]||0)+1
}
    return count;
};
