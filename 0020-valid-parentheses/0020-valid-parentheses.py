class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        order = {"[]","{}","()"}

        for char in s:
            if char in "{[(":
                stack.append(char)
            else:
                if not stack or stack.pop() + char not in order:
                    return False
        return not stack
            

        