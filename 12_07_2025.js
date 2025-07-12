
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (amount === 0) return 0;
    let dp = Array.from({length:amount + 1}).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
            }
        }
    }
    return dp[amount]===Infinity?-1:dp[amount]
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let cache={};
    function number(i){
        if(i<=1){
            return 1;
        } if(!((i-1) in cache)){
            cache[i-1]=number(i-1);
        }if(!((i-2)in cache)){
            cache[i-2]=number(i-2);
        }
        return cache[i-1]+cache[i-2]
    }
    return number(n)
};

var rob = function(nums) {
    if(nums.length===0)return 0;
    if(nums.length===1) return nums[0]
    let prev2=nums[0];
    let prev1=Math.max(nums[1],nums[0]);
    for(let i=2;i<nums.length;i++){
        let curr=Math.max(prev1,prev2+nums[i]);
        prev2=prev1;
        prev1=curr;
    }
    return prev1;
};
