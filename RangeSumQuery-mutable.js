/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums=nums.slice()
  this.tree=new Array(nums.length +1).fill(0);

  for(let i=0;i<nums.length;i++){
    this._add(i+1,nums[i]);
  }
};

NumArray.prototype._add=function(index,val){
while(index<this.tree.length){
    this.tree[index]+=val;
    index+=index&-index
}
}
NumArray.prototype._prefix=function(index){
    let sum=0;
    while(index>0){
        sum+=this.tree[index]
        index-= index&-index
    }
    return sum;
}
/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
   let diff=val-this.nums[index];
   this.nums[index]=val
   this._add(index+1,diff)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this._prefix(right+1)-this._prefix(left)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */



//  /**
//  * @param {number[]} nums
//  */
// var NumArray = function(nums) {
    
//     this.nums=nums
//    prefixSum=[0]
//     for(let i=0;i<=this.nums.length;i++){
//         prefixSum.push(this.nums[i]+prefixSum[i])
//     }
//     this.prefixSum=prefixSum
// };

// /** 
//  * @param {number} index 
//  * @param {number} val
//  * @return {void}
//  */
// NumArray.prototype.update = function(index, val) {
//     this.nums[index]=val;
//     let prefixSum=[0]
//     for(let i=0;i<=this.nums.length;i++){
//         prefixSum.push(this.nums[i]+prefixSum[i])
//     }
//     this.prefixSum=prefixSum;
// };

// /** 
//  * @param {number} left 
//  * @param {number} right
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function(left, right) {
//     // if(left===0)return this.prefixSum[right];
//     return this.prefixSum[right+1]-this.prefixSum[left]
// };

// /** 
//  * Your NumArray object will be instantiated and called as such:
//  * var obj = new NumArray(nums)
//  * obj.update(index,val)
//  * var param_2 = obj.sumRange(left,right)
//  */
