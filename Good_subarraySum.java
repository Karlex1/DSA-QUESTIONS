import java.util.*;

public class Main {
    public static void main(String[] args) {
      int[] arr={-1,3,2,4,5};
      int k=3;
      System.out.println(bfs(arr,k));
      System.out.println(ops(arr,k));
  }
  public static int bfs(int[] arr,int k){
    int n=arr.length;
    int max = 0;
    for(int i=0;i<n;i++){
      int sum=0;
  
      for(int j=i;j<n;j++){
        sum+=arr[j];
        if(Math.abs(arr[i]-arr[j])==k){
          max=Math.max(max,sum);
        }
      }
    }
    
    return max;
  }
  public static int ops(int[] nums,int k){
    int n=nums.length;
    HashMap<Integer,Integer> map=new HashMap<>();
    int sum=0;
    int max=Integer.MIN_VALUE;
    for(int num:nums){
      
      
      if(map.containsKey(num-k)){
        int start=map.get(num-k);
        max=Math.max(max,sum+num-start);
      }
      if(map.containsKey(num+k)){
        int start=map.get(num+k);
        max=Math.max(max,sum+num-start);
      }
      map.put(num, sum);
      sum+=num;
    }
    
    return max;
  }
  
    public long maximumSubarraySum(int[] nums, int k) {
        Map<Integer, Long> cumulativeSums = new HashMap<>();
        long currentSum = 0;
        long maxSum = Long.MIN_VALUE;

        for (int value : nums) {
            if (cumulativeSums.containsKey(value - k)) {
                long minValue = cumulativeSums.get(value - k);
                maxSum = Math.max(maxSum, currentSum + value - minValue);
            }
            if (cumulativeSums.containsKey(value + k)) {
                long minValue = cumulativeSums.get(value + k);
                maxSum = Math.max(maxSum, currentSum + value - minValue);
            }

            cumulativeSums.put(value, Math.min(cumulativeSums.getOrDefault(value, Long.MAX_VALUE), currentSum));
            currentSum += value;
        }

        return maxSum == Long.MIN_VALUE ? 0 : maxSum;
    }


}
