import java.util.*;

class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> ans = new ArrayList<>();

        for (int i = 1; i <= numRows; i++) {
            List<Integer> inner = new ArrayList<>();
            int temp = 1;
            inner.add(temp);
            for (int j = 1; j < i; j++) {
                temp *= (i - j);
                temp /= j;
                inner.add(temp);
            }
            ans.add(inner);
        }
        return ans;
    }
}
