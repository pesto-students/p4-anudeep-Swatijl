def maxDepth(self, root):
    stack = [[root, 1]]
    level = 0
    while stack:
        node, depth = stack.pop()
        if node:
            level = max(level, depth)
            stack.append([node.left, depth + 1])
            stack.append([node.right, depth + 1])
    return level