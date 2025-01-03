public class InfiniteArray{
  public static void main (String[] args){
    int[] arr={10,30,45,46,78,89,100,101,102,340,456,567,678,789};
    int target=100;
    System.out.println(ans(arr,target)
  }
  static int ans(int[] arr, int target){
   int start= 0;
    int end=1;
    if (target>arr[end]){
      //new start variable will be necessary to use previous start in end 
      int nstart=end+1;
      int end=end+(end-start+1)*2;
    start=nstart;}
    return binarysearch(arr,target,start,end);
  }
  static int binarysearch(int[] arr,int target,int start,int end){
while(end>=start){
  int mid=start+(end-start+1)/2;
  if(target>arr[mid]){
    start=mid+1;
  }else if(arr[mid]>target){
    end=mid-1;
                           }else{
    return mid;
                           }
}return -1;
    
  }
}
