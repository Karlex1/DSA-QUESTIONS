/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let open = 0;
    let insertions = 0;
    for (let ch of s) {
        if (ch === '(') {
            open++;
        } else { // ch === ')'
            if (open > 0) {
                open--;
            } else {
                insertions++;
            }
        }
    }
    return open + insertions;
};
var spiralOrder = function (matrix) {
    if (matrix.length === 0) return [];
    let list = [];
    let n = matrix.length;
    let m = matrix[0].length;
    let left = 0, right = m - 1, top = 0, bottom = n - 1;
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) list.push(matrix[top][i]);
        top++;
        for (let i = top; i <= bottom; i++) list.push(matrix[i][right]);
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) list.push(matrix[bottom][i]);
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) list.push(matrix[i][left]);
            left++;
        }
    }
    return list;
};
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let i = 0, j = 0;
    const result = [];

    while (i < A.length && j < B.length) {
        // Get start and end of both intervals
        let startA = A[i][0], endA = A[i][1];
        let startB = B[j][0], endB = B[j][1];

        // Find the intersection start and end
        const start = Math.max(startA, startB);
        const end = Math.min(endA, endB);

        // Check if they actually intersect
        if (start <= end) {
            result.push([start, end]);
        }

        // Move the pointer with the smaller end
        if (endA < endB) {
            i++;
        } else {
            j++;
        }
    }

    return result;
};
