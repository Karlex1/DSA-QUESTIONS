import java.util.*;
class Rotate{
  public static void main(String[] args){
    int d1=3;
    int d2=2;
    int[] arr={2,4,3,1,6,7};
    int n=arr.length;
    System.out.println(Arrays.toString(arr));
rightrotate(arr,d1,n);
    leftrotate(arr,d2,n);
    
  }
  private static void leftrotate(int[] arr,int d,int n){
    reverse(arr,0,d-1);
    reverse(arr,(d),n-1);
    reverse(arr,0,arr.length-1);
    System.out.println(Arrays.toString(arr));
  }
  private static void rightrotate(int[] arr,int d,int n){
    reverse(arr,0,n-d-1);
    reverse(arr,(n-d),n-1);
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
