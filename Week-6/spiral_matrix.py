def generateMatrix(n):
        if not n:
            return []
        arr = [[0 for _ in range(n)] for _ in range(n)]
        index = 1
        top = left = 0
        bottom = right = n-1
        while left<=right and top<=bottom:
            for col in range(left, right+1): #from left to right at top
                arr[top][col] = index
                index += 1
            top += 1
            for row in range(top, bottom+1): #from top to bottom at right
                arr[row][right] = index
                index +=1
            right -= 1
            for col in range(right, left-1, -1): # from right to left at bottom
                arr[bottom][col] = index
                index += 1
            bottom -= 1
            for row in range(bottom, top-1, -1): # from bottom to top at left
                arr[row][left] = index
                index += 1
            left += 1
        return arr

print(generateMatrix(3)) # output --> [[1, 2, 3], [8, 9, 4], [7, 6, 5]]