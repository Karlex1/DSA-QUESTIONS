import java.util.*;
class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashMap<Character,Integer> map=new HashMap<>();
        for(int i=0;i<256;i++){
            map.put((char)i,-1);
        }
        int n=s.length();
        int i=0;int j=0; int max=0;
        while(j<n){
            if(map.containsKey(s.charAt(j)) && map.get(s.charAt(j))!=-1){
                if( map.get(s.charAt(j))>=i){
                    i= map.get(s.charAt(j))+1;
                }
            }
            max=Math.max(max,j-i+1);
            map.put(s.charAt(j),j);
            j++ ;       }
  return max;  }
}
