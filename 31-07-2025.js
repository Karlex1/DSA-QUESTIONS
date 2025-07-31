/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
    // let dp=Array.from({length:arr.length+1}).fill(0);
    let res=new Set();
    let prev = new Set();
    // dp[0]=0;
    for(let i=0;i<arr.length;i++){
        let curr=new Set();
        for(let val of prev){
            curr.add(val| arr[i]);
        }
        curr.add(arr[i]);
        for(let val of curr)res.add(val);
        prev=curr;
    }
    return res.size;
};
