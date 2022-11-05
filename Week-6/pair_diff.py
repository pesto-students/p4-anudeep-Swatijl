def pair_diff(arr, diff):
    for i in arr:
        sum = i + diff
        if sum in arr:
            return 1
    return 0


print(pair_diff([-10, 20], 30)) # output --> 1
