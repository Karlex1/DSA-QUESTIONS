/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return (n>0) && (n&(n-1))===0
};

/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    let res=n.toString().split("").sort().join("");
    for(let i=0;i<32;i++){
        if((1<<i).toString().split("").sort().join("")===res)return true
    }
    return false
};

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function (n, queries) {
    const MOD = 1000000007; // Define the modulo constant

    // Step 1: Decompose n into powers of 2
    // This leverages the binary representation of n.
    // For example, if n = 13 (binary 1101), powers will be [1, 4, 8]
    // because 13 = 1*2^0 + 0*2^1 + 1*2^2 + 1*2^3 = 1 + 4 + 8.
    let powers = [];
    let currentPowerOfTwo = 1; // Represents 2^0, 2^1, 2^2, ...
    let tempN = n; // Use a temporary variable to avoid modifying the original n

    while (tempN > 0) {
        if (tempN % 2 === 1) { // If the last bit is 1, include this power of 2
            powers.push(currentPowerOfTwo);
        }
        tempN = Math.floor(tempN / 2); // Right shift to check the next bit
        currentPowerOfTwo *= 2; // Move to the next power of two (1, 2, 4, 8, ...)
    }
    // 

    let results = []; // Array to store the product for each query

    // Step 2: Process each query
    for (let i = 0; i < queries.length; i++) {
        let start = queries[i][0];
        let end = queries[i][1];
        let currentProduct = 1; // Initialize product for the current query

        // Iterate through the selected range of powers and multiply them
        // Ensure modulo operation at each multiplication to prevent overflow
        for (let j = start; j <= end; j++) {
            currentProduct = (currentProduct * powers[j]) % MOD;
        }
        results.push(currentProduct); // Add the calculated product to the results
    }

    return results; // Return the array of results
};

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

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n===0) return false;
    if(n===1) return true;
    if(n>1){
        return n%3===0 && isPowerOfThree(n/3)
    }
    else{return false}
};


/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (nums) {
    let max = '';
    let n = nums.length
    for (let i = 2; i < n; i++) {
        if (nums[i - 2] === nums[i] && nums[i - 1] === nums[i]) {
            const curr=nums[i-2]+nums[i-1]+nums[i];
            // max=Math.max(parseInt(curr),max);
            // console.log(parseInt(curr),max)
            if(curr>max){max=curr}

        }
    }
    return ""+max
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n<=0){
        return false
    }
    while(n%4===0){
        n/=4
    }
    return n===1
};


/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    num = num.toString()
    let arr = num.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '9') {
            arr[i] = '9'
            break;
        }
    }
    return parseInt(arr.join(''));
};


/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
    if(k==0 || n>=k-1+maxPts) return 1.0
    let dp=new Array(maxPts).fill(0.0);
    dp[0]=1.0;
    let windowSum=1.0,result=0.0;
    for(let i=1;i<=n;i++){
        let prob=windowSum/maxPts;
        if(i<k){
            windowSum+=prob;
        }else{
            result+=prob
        }
        if(i>=maxPts){
            windowSum-=dp[i%maxPts];
        }
        dp[i%maxPts]=prob;
    }
    return result;
};
