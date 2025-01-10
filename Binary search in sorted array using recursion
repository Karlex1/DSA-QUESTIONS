class Main {
    public static void main(String[] args) {
        System.out.println(search(new int[]{4,5,6,7,8,9,1,2,3},10,0,8));
    }

    public static int search(int[] arr,int target,int start,int end){
        int m=start+(end-start)/2;
        if(start>end){return -1;}
        if(arr[m]==target){
            return m;
        }
        if(arr[start]<=arr[m] && arr[m]<=arr[end]){
           if(arr[start]<=target && arr[m]>=target){
               return search(arr,target,start,m-1);
           }else{
               return search(arr,target,m+1,end);
           }
        }
        if(arr[m]<=target && arr[end]>=target){
            return search(arr,target,m+1,end);
        }else{
            return search(arr,target,start,m-1);
        }
    }}
