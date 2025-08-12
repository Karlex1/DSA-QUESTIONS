// Problem Type
// This is a combinatorics + dynamic programming problem.
// Similar to subset sum / coin change (combination) but:
// Order doesn’t matter → iterate bases in ascending order.
// Each number can be used at most once → iterate backwards in the inner loop.

// DP Strategy
// dp[j] = number of ways to make sum j.
// Initialization: dp[0] = 1 (one way to make 0 — use no numbers).
// Iterate over each base's x-th power and update:
// for (j = n; j >= power; j--) {
//     dp[j] = (dp[j] + dp[j - power]) % MOD;
// }
// Backward loop ensures uniqueness (no reuse of same power).

// Optimizations
// Precompute powers instead of recalculating i**x each time.
// Break early if power > n.

// Core Insights
// The backward DP update is the key trick for uniqueness.
// Precomputing powers reduces overhead and improves performance.
// This is a counting subsets with a sum constraint problem disguised as a powers sum problem.

/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function(n, x) {
    // let MOD=1000000007;
    // let max_base=Math.floor(n**(1/x));
    // let dp=new Array(n+1).fill(0);
    // dp[0]=1;
    // for(let i=1;i<=max_base;i++){
    //     const power=i**x;
    //     if (power>n) break;
    //     for(let j=n;j>=power;j--){
    //         dp[j]=(dp[j]+dp[j-power])%MOD
    //     }
    // }
    // return dp[n]

    let MOD=1000000007;
    let powers=[];
    let i=1;
    while (true){
        pow=(i**x)
        if(pow>n)break;
        powers.push(pow);
        i++;
    }
    let dp=new Array(n+1).fill(0);
    dp[0]=1;
    for(let pow of powers){
        for(let j=n;j>=pow;j--){
            dp[j]=(dp[j]+dp[j-pow])%MOD;
        }
    }
    return dp[n];
};
