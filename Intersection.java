import java.util.*;
class Intersection{
  public static void main(String[] args){
    int[] arr = {1,2,3,4,5};
    int[] arr1 = {4,5,6,7,8};
    bf(arr,arr1);
    
  }
  public static void bf(int[] arr,int[] arr1){
    int n1=arr.length;
    int n2=arr1.length;
    // int n3=n1+n2;
    ArrayList<Integer> arr3=new ArrayList<>();
    // int[] arr3=new int[n3];
    int i=0;int j=0;
    // for(int k=0;k<arr3.length;k++){
      while(i<n1 && j<n2){
        if(arr[i]==arr1[j]){
          arr3.add(arr[i]);
          i++;
          j++;
        }else if(arr[i]<arr1[j]){
          i++;
        }else if(arr[i]>arr1[j]){
          j++;
        // }
     
      }
    }HashSet hash=new HashSet();
          hash.addAll(arr3);
          hash.removeAll(arr3);
    
    System.out.println(hash);
  }
}
