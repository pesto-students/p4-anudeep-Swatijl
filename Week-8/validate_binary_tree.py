def isValidBST(self, root):
    def isValid(minVal, node, maxVal):
        if not node:
            return True
        if not (node.val > minVal and node.val < maxVal):
            return False
        return (isValid(minVal, node.left, node.val) and isValid(node.val, node.right, maxVal))
    return isValid(float('-inf'), root, float('inf'))