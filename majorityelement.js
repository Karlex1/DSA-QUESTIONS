/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // let map={},max=0,majority=0;
    // for(let i=0;i<nums.length;i++){
    //     map[nums[i]]=(map[nums[i]] || 0)+1;
        // if(map[nums[i]]>max){
        //     majority=nums[i];
        //     max=map[nums[i]];
        // }
    // }
    // return majority
    // entries=Object.entries(map)
    // entries.sort((a,b)=>a[1]-b[1]);
    // return parseInt(entries[entries.length-1][0])

// Optimized Boyer–Moore Solution
    let a=0,b=null;
    for(let i=0;i<nums.length;i++){
        if(a===0) b=nums[i];
        a+=(nums[i]===b)?1:-1
    }
    return b
};
