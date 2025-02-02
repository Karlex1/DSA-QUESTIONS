class Solution {
    public List<String> letterCombinations(String digits) {
     if (digits == null || digits.isEmpty()) {
            return new ArrayList<>();
        }
        return letterCombinationsHelper(digits, "");
    }

    private List<String> letterCombinationsHelper(String digits, String current) {
        if (digits.isEmpty()) {
            List<String> list = new ArrayList<>();
            list.add(current);
            return list;
        }

        int digit = digits.charAt(0) - '0';
        List<String> result = new ArrayList<>();

        int start = (digit - 2) * 3;  // Calculate start index
        int end = start+3;          // Calculate end index

        // Adjust for '7' and '9' (4 letters)
        if (digit == 7) {
            end++;
        }
        if( digit == 9){
            start++;
            end=start+4;
        }
        if(digit == 8){
            start++;
            end++;
            
        }

        for (int i = start; i < end; i++) {
            char letter = (char) ('a' + i);
            result.addAll(letterCombinationsHelper(digits.substring(1), current + letter));
        }
        return result;
    }
}
