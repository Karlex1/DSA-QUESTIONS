#how to do it?
#search for breakpoint-> find the largest prefix
#

class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        index=-1
        n=len(nums)
      #largest prefix
        for i in range(n-2,-1,-1):
            if(nums[i]<nums[i+1]):
                index=i
                break
      #if we r not already at largest permutation reverse the remaining string after the index of breakpoint
        if index !=-1:
            for i in range(n-1,index-1,-1):
                if(nums[i]>nums[index]):
                    nums[i],nums[index]=nums[index],nums[i]
                    break
      
        self.reverse(nums,index+1,n-1)
    def reverse(self,nums: List[int], index: int, last: int)->None:
        while(last>index):
            nums[last],nums[index]=nums[index],nums[last]
            index=index+1
            last=last-1
        return nums
