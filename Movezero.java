import java.util.*;
class Movezero{
  public static void main(String[] args){
    int[] arr={1,3,0,6,0,6,4,0,7,0,1,2,0,6};
    move(arr);
    move1(arr);
  }
  //Brute force
  public static void move(int[] arr){
    ArrayList<Integer> list=new ArrayList<>();
    for(int num: arr){
      if(num!=0){
        list.add(num);
      }
    }
    int i=0;
    for(int num:list){
      arr[i]=num;
      i++;
    }
    for(int j=i;j<arr.length;j++){
      arr[j]=0;
    }
    System.out.println(Arrays.toString(arr));
  }
// optimal solution int[] arr={1,3,0,6,0,6,4,0,7,0,1,2,0,6};
  public static void move1(int[] arr){
    int i=0;
    for(int j=0;j<arr.length;j++){
      if(arr[j]!=0){
        int temp=arr[i];
          arr[i]=arr[j];
        arr[j]=temp;
        i++;
      }
    }
    System.out.println(Arrays.toString(arr));
  }
}
