class Solution {
    public int largestAltitude(int[] gain) {
        int n=gain.length;
        int temp=0;
        int max=0;
        
        for(int i=0;i<n;i++){
          temp+=gain[i];
           max=Math.max(max,temp);
           
        }
        return max;
    }
}
