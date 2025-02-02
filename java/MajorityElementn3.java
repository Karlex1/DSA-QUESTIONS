//Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

//Example 1:

//Input: nums = [3,2,3]
//Output: [3]

class Solution {
    public List<Integer> majorityElement(int[] nums) {
        List<Integer> list = new ArrayList<>();
        int count1 = 0;
        int count2 = 0;
        int min = nums.length / 3 +1;
        int ele1 = Integer.MIN_VALUE;
        int ele2 = Integer.MIN_VALUE;
        for (int i = 0; i < nums.length; i++) {
            if (count1 == 0 && nums[i] != ele2) {
                count1++;
                ele1=nums[i];
            }
            else if(count2==0 && nums[i] != ele1){
                count2++;
                ele2=nums[i];
            }
            else if(ele1==nums[i]) count1++;
            else if(ele2==nums[i]) count2++;
            else{
                count1--;
                count2--;
            }

        }
        count1=0;count2=0;
        for(int i=0;i<nums.length;i++){
            if (ele1==nums[i]) count1++;
            if (ele2== nums[i]) count2++;
        }
        if(count1>=min) list.add(ele1);
        if(count2>=min) list.add(ele2);
        return list;
    }
}
