class Solution {
    public int[] successfulPairs(int[] spells, int[] potions, long success) {
        int n = spells.length, m = potions.length;
        int[] result = new int[n];

        Arrays.sort(potions); // Sort potions for binary search

        for (int i = 0; i < n; i++) {
            int spell = spells[i];
            int low = 0, high = m - 1, index = m; // Binary search variables

            while (low <= high) {
                int mid = (low + high) / 2;
                if ((long) spell * potions[mid] >= success) {
                    index = mid; // Store first valid index
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }

            result[i] = m - index; // Count of successful pairs
        }
        return result;
    }
}
