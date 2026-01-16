class Solution(object):
    def addToArrayForm(self, num, k):
        """
        :type num: List[int]
        :type k: int
        :rtype: List[int]
        """
        number =""
        for i in num:
            number += str(i)
        rs = str(int(number) + k)
        return [int(i) for i in rs]
        