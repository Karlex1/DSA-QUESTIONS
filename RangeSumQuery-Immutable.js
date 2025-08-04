/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    var prefixSum=[];
    for(let i=0;i<nums.length;i++){
        prefixSum[i]=i==0?nums[i]:nums[i]+prefixSum[i-1];
    }
    this.nums=prefixSum;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left===0) return this.nums[right];
   return this.nums[right]-this.nums[left-1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
