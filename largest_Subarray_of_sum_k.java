import java.util.HashMap;
import java.util.Map;
class Main{
  public static void main(String[] args){
    // int[] arr={3,0,1,-1,3,5,-1,0,2,1,7,10,9};
    int[] arr={3,0,1,3,5,0,2,1,7,10,9};
    int n=arr.length;

    // System.out.println((b(arr,n,9)));
    // System.out.println(bs(arr,n,7));
System.out.println(best(arr,n,19));
// System.out.println(ops(arr,n,8));
 }
  public static int b(int[] arr,int n,int t){
    int pre=0;
    for(int i=0;i<n;i++){
      for(int j=i;j<n;j++){
        int sum=0;
        for(int k=i;k<=j;k++){
          sum+=arr[k];
        // System.out.print(arr[k]);
        }
        if(t==sum ){
          pre=Math.max(pre,j-i+1);
        }
      }
         } return (pre);
  }

  public static int bs(int[] arr, int n, int t) {
      int pre = 0;
      for (int i = 0; i < n; i++) {
          int sum = 0;
          for (int j = i; j < n; j++) {

              sum += arr[j];
              // System.out.print(arr[k]);

              if (t == sum) {
                  pre = Math.max(pre, j - i + 1);
              }
          }
      }
      return (pre);
  }
  

  /*create a hashMap which will store the previous sum at their index.
  iterate over arr currentSum+=arr[i]
  calculate currentSum-K and search for result in hashTable if the key match then bring the value index and subtract with current i if length >max then update max then move forward in array*/
  public static int ops(int[] arr,int n, int k) {
    int max = 0;
    int sum = 0;
    
      Map<Integer, Integer> map = new HashMap<>();
      for (int i = 0; i < n; i++) {
        sum += arr[i];
        if(sum==k){
max=Math.max(max,i+1);
        }
      
        int rem = sum - k;
        if (map.containsKey(rem)) {
          int current = i - map.get(rem);
          max = Math.max(current, max);
        }
        if (!map.containsKey(sum))
          {
            map.put(sum, i);
          }
      }
      return max;
  }
  
  public static int best(int[] arr,int n,int k){
      int i=0;int sum=arr[0];int max=0;
      int j=0;
      while(j<n){
          while((i<=j)&&sum>k){
              sum-=arr[i];
              i++;
          }
          if(sum==k){
              max=Math.max(max,j-i+1);
          }
          j++;
          if(j<n){
          sum+=arr[j];}
          
      }
      return max;
  }
  
}
