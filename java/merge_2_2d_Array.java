// class Solution {
//     public int[][] mergeArrays(int[][] nums1, int[][] nums2) {
//         int n=nums1.length;
//         int m=nums2.length;
//         List<List<Integer>> res=new ArrayList<>();
//         int i=0;int j=0;
//         while(i<n &&j<m){
//             if(nums1[i][0]==nums2[j][0]){
//                 res.add(new ArrayList<>(Arrays.asList(nums1[i][0], nums1[i][1]+nums2[j][1])));
//                 i++;j++;
//             }else if(nums1[i][0]<nums2[j][0]){
//                 res.add(new ArrayList<>(Arrays.asList(nums1[i][0],nums1[i][1])));
//                 i++;
//             }
//             else if(nums1[i][0]>nums2[j][0]){
//                 res.add(new ArrayList<>(Arrays.asList(nums2[j][0], nums2[j][1])));
//                 j++;
//             }
//         }
//         while(i<n){
//             res.add(new ArrayList<>(Arrays.asList(nums1[i][0],nums1[i][1])));i++;
//         }
//         while(j<m){
//             res.add(new ArrayList<>(Arrays.asList(nums2[j][0],nums2[j][1])));
//             j++;
//         }
//         int[][] result = new int[res.size()][2];
//         for (int k = 0; k < res.size(); k++) {
//             result[k][0] = res.get(k).get(0);
//             result[k][1] = res.get(k).get(1);
//         }
//         return result;
//     }
// }


class Solution {
    public int[][] mergeArrays(int[][] nums1, int[][] nums2) {
        int n1=nums1.length,n2=nums2.length,i=0,j=0;
        ArrayList<int []>ans=new ArrayList();
        while(i<n1&& j<n2){
            if(nums1[i][0]==nums2[j][0]){
                ans.add(new int[]{nums1[i][0],nums1[i][1]+nums2[j][1]});
                i++;
                j++;
            }
            else if(nums1[i][0]<nums2[j][0]){
                ans.add(nums1[i]);
                i++;
            }
            else{
                ans.add(nums2[j]);
                j++;
            }
        }
        while(i<n1){
            ans.add(nums1[i++]);
        }
        while(j<n2){
            ans.add(nums2[j++]);
        }
        return ans.toArray(new int[ans.size()][]);
    }
}
