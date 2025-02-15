class Solution {
    public int[] twoSum(int[] arr,int k) {
        int n=arr.length;
        HashMap<Integer,Integer> map=new HashMap<>();
        for(int i=0;i<n;i++){
            int rem=k-arr[i];
            if(map.containsKey(rem)){
                return new int[] {map.get(rem),i};
            }
            map.put(arr[i],i);
        }return null;
    }
}
