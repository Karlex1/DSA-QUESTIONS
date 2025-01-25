//Unique no of occurrence 1207 leetcode 
import java.util.*;
class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        HashMap<Integer,Integer> map=new HashMap<>();
        for(int num: arr){
            map.put(num,map.getOrDefault(num,0)+1);
        }
        Set<Integer> valueset=new HashSet<>();
        for(int value:map.values()){
            if(!valueset.add(value)){
                return false;
            }
        }
        return true;
    }
}
