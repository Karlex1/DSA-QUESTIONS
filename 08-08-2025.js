/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    // Optimization: For n >= 4800, probability is effectively 1
    // Proven by mathematical convergence — saves huge recursion time.
    if (n >= 4800) return 1;

    // Memoization map to store already computed states (a,b)
    let memo = new Map();

    // Four possible serving operations
    // Each entry: [amount of A removed, amount of B removed]
    let servings = [
        [100, 0],   // Serve 100 ml A, 0 ml B
        [75, 25],   // Serve 75 ml A, 25 ml B
        [50, 50],   // Serve 50 ml A, 50 ml B
        [25, 75]    // Serve 25 ml A, 75 ml B
    ];

    /**
     * Recursive DFS to compute probability that A becomes empty first
     * a = current ml of soup A
     * b = current ml of soup B
     */
    function dfs(a, b) {
        // Base cases:
        if (a <= 0 && b <= 0) return 0.5; // both empty at same time
        if (a <= 0) return 1;              // A empty first → full win for A
        if (b <= 0) return 0;              // B empty first → lose for A

        // Create a unique key for memoization
        let key = `${a},${b}`;
        if (memo.has(key)) return memo.get(key);

        let prob = 0;
        // Try each serving option and sum probabilities
        for (let [da, db] of servings) {
            prob += dfs(a - da, b - db);
        }
        prob /= 4; // Average over the 4 possible serving operations

        // Store result in memo
        memo.set(key, prob);
        return prob;
    }

    // Start recursion with both soups having n ml
    return dfs(n, n);
};
