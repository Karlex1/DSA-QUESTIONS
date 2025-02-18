//2375. Construct Smallest Number From DI String
// approach we used the stack to count integer until we find the 'I' in string when 'I' met then pop
// all element.Move forward
// If 'I' is not there stack will fill till the string end when string ends then pop all elements 
// from the stack.

import java.util.*;

class Solution {
    public String smallestNumber(String pattern) {
        int n = pattern.length();
        StringBuilder result = new StringBuilder();
        Stack<Integer> stack = new Stack<>();
        int num = 1;

        for (int i = 0; i <= n; i++) {
            stack.push(num++);
            if (i == n || pattern.charAt(i) == 'I') {
                while (!stack.isEmpty()) {
                    result.append(stack.pop());
                }
            }
        }

        return result.toString();
    }
}
