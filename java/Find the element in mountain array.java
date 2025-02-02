/**
 * // This is MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface MountainArray {
 * public int get(int index) {}
 * public int length() {}
 * }
 */

class Solution {
    public int findInMountainArray(int target, MountainArray mountainArr) {
    int start=0;int end=mountainArr.length()-1;
        int index = peakIndexInMountainArray(mountainArr);
        int ans = binarysearch(mountainArr, target, start, index,true);
        if (ans != -1) {
            return ans;
        }


        return binarysearch(mountainArr, target, index, end,false);
    }

    static int binarysearch(MountainArray arr, int target, int start, int end,boolean upside) {
        while (end >= start) {
            int mid = start + (end - start + 1) / 2;
            if(arr.get(mid) == target){
                                return mid;
                                            }
            if(upside){
            if (target <arr.get(mid)) {
                end = mid - 1;
            } else  {
                start= mid + 1;
            }
             
            }else{
                if(target<arr.get(mid)){
                    start=mid+1;
                }else{
                    end=mid-1;
                }
            }
        }return-1;

    }

    public int peakIndexInMountainArray(MountainArray arr) {
        int start = 0;
        int end = arr.length() - 1;
        while (end > start) {
            int mid = start + (end - start) / 2;
            if (arr.get(mid) < arr.get(mid + 1)) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
        return start;
    }
}
