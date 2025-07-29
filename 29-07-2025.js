/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(nums, target) {
    let curr=[]
    let res=[]
    nums.sort()
    const backtrack=(start,curr,total)=>{
        if(target===total){
            res.push([...curr]);
            return;
        }
        if(total>target)return;

        for(let i=start;i<nums.length;i++){
            if(i>start && nums[i]===nums[i-1])continue;
            curr.push(nums[i]);
            backtrack(i+1,curr,total+nums[i])
            curr.pop()
            // backtrack(i+1,curr,total+nums[i])
        }
    }
    backtrack(0,curr,0)
    return res;
}; 
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(nums, target) {
    
    let res=[]
    const backtrack=(start,curr,total)=>{
        if(total===target){
            res.push([...curr]);
            return;
        }
        if(total >target) return;

        for(let i=start;i<nums.length;i++){
            curr.push(nums[i])
            backtrack(i,curr,total+nums[i])
            curr.pop()
        }
    }
    backtrack(0,[],0)
    return res
};
