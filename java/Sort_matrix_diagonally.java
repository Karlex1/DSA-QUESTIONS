import java.util.*;

class Solution {
    public int[][] sortMatrix(int[][] grid) {
        int n = grid.length;

        // Sort diagonals in the bottom-left triangle (including main diagonal)
        for (int row = 0; row < n; row++) {
            sortDiagonal(grid, row, 0, n, false);
        }

        // Sort diagonals in the top-right triangle
        for (int col = 1; col < n; col++) {
            sortDiagonal(grid, 0, col, n, true);
        }

        return grid;
    }

    private void sortDiagonal(int[][] grid, int row, int col, int n, boolean increasing) {
        List<Integer> diagonal = new ArrayList<>();

        // Extract diagonal elements
        int r = row, c = col;
        while (r < n && c < n) {
            diagonal.add(grid[r][c]);
            r++;
            c++;
        }

        // Sort the diagonal
        if (increasing) {
            Collections.sort(diagonal); // Sort in increasing order
        } else {
            Collections.sort(diagonal, Collections.reverseOrder()); // Sort in decreasing order
        }

        // Place sorted values back into the grid
        r = row;
        c = col;
        int index = 0;
        while (r < n && c < n) {
            grid[r][c] = diagonal.get(index++);
            r++;
            c++;
        }
    }

    
}
