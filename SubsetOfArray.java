import java.util.ArrayList;
class Main{
  public static void main(String[] args){
    int[] arr={1,2,3};
    rec(arr,0,new ArrayList<Integer>());
  }
  static void rec(int[] arr,int i,ArrayList<Integer> sol){
    if(i>arr.length-1){
      System.out.println(sol);
      return;
    }
    sol.add(arr[i]);
    rec(arr,i+1,sol);
    sol.remove(sol.size()-1);
    rec(arr,i+1,sol);
    
  }
                  }
