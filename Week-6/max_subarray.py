def maxSubArray(nums):
    if len(nums) == 1:
        return nums[0]
    max_sum = temp = nums[0]
    for i in nums[1:]:
        temp = max(i, i+temp)
        max_sum = max(max_sum, temp)
    return max_sum

print(maxSubArray([1,2,3,4,-10])) # Output -> 10