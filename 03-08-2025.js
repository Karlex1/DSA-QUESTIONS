var maxTotalFruits = function(fruits, startPos, k) {
    let n = fruits.length;
    let prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + fruits[i][1];
    }

    const getSum = (l, r) => {
        let leftIndex = lowerBound(fruits, l);
        let rightIndex = upperBound(fruits, r);
        return prefix[rightIndex] - prefix[leftIndex];
    };

    const lowerBound = (arr, target) => {
        let l = 0, r = arr.length;
        while (l < r) {
            let m = Math.floor((l + r) / 2);
            if (arr[m][0] < target) l = m + 1;
            else r = m;
        }
        return l;
    };

    const upperBound = (arr, target) => {
        let l = 0, r = arr.length;
        while (l < r) {
            let m = Math.floor((l + r) / 2);
            if (arr[m][0] <= target) l = m + 1;
            else r = m;
        }
        return l;
    };

    let res = 0;

    for (let x = 0; x <= k; x++) {
        let l = startPos - x;
        let r = startPos + Math.max(0, k - 2 * x);
        res = Math.max(res, getSum(l, r));

        r = startPos + x;
        l = startPos - Math.max(0, k - 2 * x);
        res = Math.max(res, getSum(l, r));
    }

    return res;
};
