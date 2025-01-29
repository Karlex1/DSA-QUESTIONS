import java.util.*;

public class Main {
    public static void main(String[] args) {
     System.out.print(leaders(new int[]{10,2,7,5,4,1})); 
  }
  public static List<Integer> leaders(int[] nums){
    int n=nums.length;
    int max=nums[n-1];
    List<Integer> list=new ArrayList<>();
    list.add(max);
    for(int i=n-2;i>=0;i--){
      if(nums[i]>max){
        max=nums[i];
        list.add(max);
      }
    }
    return list;
  }
}
