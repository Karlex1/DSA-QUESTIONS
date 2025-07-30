/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let curr = []
    let res = []
    const palindrome = (str, l, r) => {
        while (l < r) {
            if (str[l] !== str[r]) return false;
            l++; r--;

        }
        return true;
    }
    const backtrack = (curr, idx) => {
        if (idx === s.length) {
            res.push([...curr]);
            return;
        }

        for (let i = idx; i < s.length; i++) {
            if (palindrome(s, idx, i)) {
                curr.push(s.slice(idx, i + 1))
                backtrack(curr, i + 1)
                curr.pop()
            }
        }
    }
    backtrack(curr, 0);
    return res
};
