def isValid(s):
    stack = []
    char_hashmap = {')':'(', '}':'{', ']':'['}
    for i in s:
        if i in char_hashmap:
            if stack and stack[-1] == char_hashmap[i]:
                stack.pop()
            else:
                return False
        else:
            stack.append(i)
    return True if not stack else False

print(isValid('{[()]}')) #True
print(isValid('{[)]()}')) #False