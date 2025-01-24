import java.util.*;
class Rotate{
  public static void main(String[] args){
    int d=3;
    int[] arr={2,4,3,1,6,7};
    reverse(arr,0,d-1);
    reverse(arr,d,arr.length-1);
    reverse(arr,0,arr.length-1);
    System.out.println(Arrays.toString(arr));
  }
  public static int[] reverse(int[] arr,int s,int e){
    while(e>s){
      int temp=arr[s];
      arr[s]=arr[e];
      arr[e]=temp;
      s++;e--;
    }
    return arr;
  }
}
