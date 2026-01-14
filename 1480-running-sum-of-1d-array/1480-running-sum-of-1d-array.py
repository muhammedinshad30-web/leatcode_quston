class Solution(object):
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        arry = []
        value = 0
        for i in nums:  
            for j in range(i,i+1):
                value += j
            arry.append(value)
        return arry

