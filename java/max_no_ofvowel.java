//sliding window
class Solution {
    public int maxVowels(String s, int k) {
        String vowels="aeiouAEIOU";
        int count=0;
        int max=0;

        for(int i=0;i<k;i++){
            if(vowels.indexOf(s.charAt(i))!=-1){
                count++;
            }
        }
        max=count;
        for(int i=k;i<s.length();i++){
            if(vowels.indexOf(s.charAt(i))!=-1){
                count++;
            }
            if (vowels.indexOf(s.charAt(i - k)) != -1) { // Remove old character
                count--;
            }
            max=Math.max(max,count);
        }
        return max;
    }
}
