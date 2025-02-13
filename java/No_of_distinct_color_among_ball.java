import java.util.*;

class Solution {
    public int[] queryResults(int limit, int[][] queries) {
        int n = queries.length;
        int[] ans = new int[n];

        HashMap<Integer, Integer> ballColor = new HashMap<>(); // Stores (ball -> color)
        HashMap<Integer, Integer> colorCount = new HashMap<>(); // Stores (color -> frequency)
        int distinctColors = 0; // Track distinct colors count

        for (int i = 0; i < n; i++) {
            int ball = queries[i][0];
            int color = queries[i][1];

            // If the ball already has a color, update the previous color count
            if (ballColor.containsKey(ball)) {
                int prevColor = ballColor.get(ball);
                colorCount.put(prevColor, colorCount.get(prevColor) - 1);
                if (colorCount.get(prevColor) == 0) {
                    colorCount.remove(prevColor);
                    distinctColors--; // Reduce distinct color count
                }
            }

            // Assign new color to ball
            ballColor.put(ball, color);
            colorCount.put(color, colorCount.getOrDefault(color, 0) + 1);
            if (colorCount.get(color) == 1) {
                distinctColors++; // Increase distinct color count
            }

            ans[i] = distinctColors;
        }
        return ans;
    }
}
