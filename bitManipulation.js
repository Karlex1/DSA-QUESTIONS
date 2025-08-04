// Bit Manipulation Revision Points
//  1. XOR Operator (^)
// Used in: hammingDistance(x, y)

// Purpose: Finds differing bits between two numbers.

// x ^ y results in a number with 1s at positions where the bits of x and y differ.

// Example:

// js
// Copy
// Edit
// x = 5 (0101), y = 3 (0011)
// x ^ y = 6 (0110) → 2 differing bits
//  2. Bit Shifting (1 << i)
// Used in: hammingDistance

// Purpose: Create a mask to check if the i-th bit is set.

// 1 << i shifts 1 left by i positions.

// Example:

// js
// Copy
// Edit
// (1 << 2) = 4 → binary: 00000100
//  3. Bitwise AND (&)
// Used in both functions

// Purpose:

// xor & (1 << i) checks if the i-th bit in xor is 1.

// n & (n - 1) removes the rightmost set bit in n.

// Example:

// js
// Copy
// Edit
// n = 12 (1100)
// n & (n - 1) = 8 (1000) → removes last `1`
//  4. Hamming Distance
// Definition: Number of differing bits between two integers.

// Approach: XOR → Count 1s in result.

//  5. Hamming Weight (or Population Count)
// Definition: Number of 1s in the binary representation of a number.

// Approach: Keep clearing the least significant bit set to 1 using n & (n - 1) until n becomes 0.

// Advantage: More efficient than checking each bit.
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
     let xor = x ^ y,count=0;
    // for (let i = 0; i < 32; i++) {
    //     if((xor &(1<<i))!==0){
    //         count++;
    //     }
    // }
    // return count;
    while(xor !=0){
        xor=xor&(xor-1)
        count++;
    }
    return count;
};


/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count=0;
    while(n!==0){
        n=n&(n-1)
        count++;
    }
    return count;
};
