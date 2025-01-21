// problem link https://leetcode.com/problems/peak-index-in-a-mountain-array/submissions/1496832150/

class Solution {
    public int peakIndexInMountainArray(int[] arr) {
        int start=0;
        int end=arr.length-1;
        while(end>start){
            int mid=start+(end-start)/2;
            if(arr[mid]<arr[mid+1]){
                start=mid+1;
        }
        else{
            end=mid;
        }
    }return start;}
}
