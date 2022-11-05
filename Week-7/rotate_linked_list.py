def rotateRight(self, head, k):
    if not head or not head.next: 
        return head

    prev = None
    curr = head
    length = 0

    while curr:
        length += 1
        curr = curr.next
    curr = head

    for i in range(k % length):
        while curr.next:
            prev = curr
            curr = curr.next
        curr.next = head
        prev.next = None
        head = curr
    return curr

rotateRight([1,2,3,4,5], 2) #output - [4,5,1,2,3]