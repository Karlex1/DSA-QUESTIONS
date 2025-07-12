/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let maxSide = 0;
    let m = matrix.length,
        n = matrix[0].length;
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                dp[i + 1][j + 1] = Math.min(
                    dp[i][j + 1],   // top
                    dp[i + 1][j],   // left
                    dp[i][j]        // top-left
                ) + 1;
                maxSide = Math.max(maxSide, dp[i + 1][j + 1]);
            }
        }
    }
    return maxSide * maxSide;
};

var floodFill = function (image, sr, sc, color) {
    const original = image[sr][sc];
    if (original === color) return image;

    const dfs = function (r, c) {
        // Bounds check
        if (r < 0 || c < 0 || r >= image.length || c >= image[0].length) return;
        if (image[r][c] !== original) return;

        image[r][c] = color;

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    dfs(sr, sc);
    return image;
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var floodFill = function(image, sr, sc, color) {
    const original = image[sr][sc];
    if (original === color) return image;

    const m = image.length;
    const n = image[0].length;
    const queue = [[sr, sc]];
    const directions = [
        [1,0], [-1,0], [0,1], [0,-1]
    ];

    while (queue.length > 0) {
        const [r, c] = queue.shift();
        image[r][c] = color;

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 &&
                nc >= 0 &&
                nr < m &&
                nc < n &&
                image[nr][nc] === original
            ) {
                queue.push([nr, nc]);
            }
        }
    }

    return image;
};
