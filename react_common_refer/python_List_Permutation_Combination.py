"""
1.生成排列，列表中元素不允许重复出现

2.生成排列，列表中元素可以重复出现

3.生成组合,不限元素个数，列表中元素不允许重复出现

4.生成组合,不限元素个数，列表中元素可以重复出现
"""

from itertools import product
from itertools import combinations
from itertools import permutations


class Solution(object):

    def permute(self, nums):
        """
        生成排列
        列表中元素不允许重复出现
        排列数计算为：n！，其中n为num_list列表中元素个数
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        from itertools import permutations
        temp_list = list(permutations(nums))
        return temp_list

    def permute2(self, nums):
        """
        生成排列
        列表中元素可以重复出现
        排列总数计算为：(n*n*n...*n)，一共n个n相乘
        """
        num = len(nums)
        res_list = list(product(nums, repeat=num))
        return res_list

    def combinate(self, nums):
        """
        生成组合,不限元素个数
        列表中元素不允许重复出现
        组合数计算为：2^n，其中n为num_list列表中元素个数
        """
        res_list = []
        for i in range(len(nums) + 1):
            res_list += list(combinations(nums, i))
        return res_list

    def combinate2(self, nums):
        """
        生成组合,不限元素个数
        列表中元素可以重复出现
        """
        res_list = []
        num_list1 = [str(i) for i in nums]
        for i in range(0, len(nums) + 1):
            # zip()压缩可迭代对象，*号解压可迭代对象；
            res_list += [''.join(x) for x in product(*[num_list1] * i)]
        return res_list


nums = [1, 2, 3]
solution = Solution()
print(solution.permute(nums))
print(solution.permute2(nums))
print(solution.combinate(nums))
print(solution.combinate2(nums))



"""
result
[(1, 2, 3), (1, 3, 2), (2, 1, 3), (2, 3, 1), (3, 1, 2), (3, 2, 1)]
[(1, 1, 1), (1, 1, 2), (1, 1, 3), (1, 2, 1), (1, 2, 2), (1, 2, 3), (1, 3, 1), (1, 3, 2), (1, 3, 3), (2, 1, 1), (2, 1, 2), (2, 1, 3), (2, 2, 1), (2, 2, 2), (2, 2, 3), (2, 3, 1), (2, 3, 2), (2, 3, 3), (3, 1, 1), (3, 1, 2), (3, 1, 3), (3, 2, 1), (3, 2, 2), (3, 2, 3), (3, 3, 1), (3, 3, 2), (3, 3, 3)]
[(), (1,), (2,), (3,), (1, 2), (1, 3), (2, 3), (1, 2, 3)]
['', '1', '2', '3', '11', '12', '13', '21', '22', '23', '31', '32', '33', '111', '112', '113', '121', '122', '123', '131', '132', '133', '211', '212', '213', '221', '222', '223', '231', '232', '233', '311', '312', '313', '321', '322', '323', '331', '332', '333']
"""