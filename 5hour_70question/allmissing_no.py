class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        ans=[]
        set_n=set(nums)
        for i in range(1,len(nums)+1):
            if i not in set_n:
                ans.append(i)
        return ans


# alternate solution O(1) space complexity
class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        # Mark the positions corresponding to the numbers seen
        for num in nums:
            index = abs(num) - 1
            if nums[index] > 0:
                nums[index] = -nums[index]

        # Collect the indices of the positive numbers, which represent missing numbers
        return [i + 1 for i in range(len(nums)) if nums[i] > 0]
