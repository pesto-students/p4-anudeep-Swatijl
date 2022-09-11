def three_sum(nums, target):
    nums.sort()
    ans = nums[0] + nums[1] + nums[2];
    for i in range(0, len(nums)-2):
        start = i+1
        end = len(nums)-1
        while start < end:
            sum = nums[i] + (nums[start] + nums[end])
            if sum == target:
                return sum
            if abs(sum - target) < abs(ans - target):
                ans = sum
            if sum < target:
                start += 1
            else:
                end -= 1
    return ans

print(three_sum([-1, 2, 1, -4], 1))  #output --> 2