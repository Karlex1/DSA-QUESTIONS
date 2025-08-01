/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function (nums) {
    let n = nums.length;
    let res = Array(n).fill(1)//result  array
    let bits = Array(32).fill(-1)//bits is to locate where we last seen nums[i]
    //reverse iterate in nums
    for (let i = n - 1; i >= 0; i--) {
        //over all bit, to see if its set nums[i]
        for (let b = 0; b < 32; b++) {
            // if its set then mark this bit seen at i
            if ((nums[i] & (1 << b)) !== 0) bits[b] = i
        }

        let maxlen = i
        //iterate all 32 bits and find farthest index req...
        for (let b = 0; b < 32; b++) {
            // if seen then check maxlen
            if (bits[b] !== -1) {
                maxlen = Math.max(maxlen, bits[b])
            }
        }
        res[i] = maxlen - i + 1
    }
    return res
};
