import java.util.ArrayList;
class Main {
    public static void main(String[] args) {
        System.out.println(findinteger(new int[]{12,23,4,4,45,56},4,0,new ArrayList<Integer>()));
    }

    public static ArrayList<Integer> findinteger(int[] arr,int target,int index,ArrayList<Integer> list){
        if(arr[index]==target){
            list.add(index);
        }
        if(index==arr.length-1){
            return list;
        }
        return findinteger(arr,target,index+1,list);
    }
