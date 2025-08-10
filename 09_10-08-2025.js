var isPowerOfTwo = function(n) {
    return (n>0) && (n&(n-1))===0
};

var reorderedPowerOf2 = function(n) {
    let res=n.toString().split("").sort().join("");
    for(let i=0;i<32;i++){
        if((1<<i).toString().split("").sort().join("")===res)return true
    }
    return false
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const heaps = (arr, n, i) => {
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        if (l < n && arr[l] > arr[largest]) largest = l;
        if (r < n && arr[r] > arr[largest]) largest = r;

        if (largest !== i) {
            arr[i] = arr[i] ^ arr[largest];
            arr[largest] = arr[i] ^ arr[largest];
            arr[i] = arr[largest] ^ arr[i];
            heaps(arr, n, largest);
        }
    }
    function heapsort(arr) {
        let n = arr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heaps(arr, n, i);
        }
        for(let i=n-1;i>0;i--){
            arr[0]=arr[i]^arr[0];
            arr[i]=arr[i]^arr[0]
            arr[0]=arr[i]^arr[0];
            heaps(arr,i,0);
        }
    }
    heapsort(nums);
    return nums;
};


var convert = function (s, numRows) {
    if (numRows === 1 || numRows >= s.length) return s;

    let ans = [];
    let grp = 2 * numRows - 2; // full cycle length

    for (let row = 0; row < numRows; row++) {
        let idx = row;
        let step1 = grp - 2 * row; // first jump
        let step2 = 2 * row;       // second jump
        let toggle = true;

        while (idx < s.length) {
            ans.push(s[idx]);

            // For first and last rows, only one step is used
            if (row === 0 || row === numRows - 1) {
                idx += grp;
            } else {
                // alternate between step1 and step2
                idx += toggle ? step1 : step2;
                toggle = !toggle;
            }
        }
    }
    return ans.join("");
};
