class MyQueue:
    def __init__(self):
        self.stack1 = []
        self.stack2=[]

    def push(self, x):
        self.stack1.append(x)
    
    def move(self):
        if not self.stack2:
            while len(self.stack1):
                popped_element = self.stack1.pop()
                self.stack2.append(popped_element)

    def pop(self):
        self.move()
        return self.stack2.pop()

    def peek(self):
        self.move()
        print(self.stack2)
        return self.stack2[-1]

    def empty(self):
        return not self.stack1 and not self.stack2


obj = MyQueue()
obj.push(1) #[1]
obj.push(2) #[1, 2]
print(obj.peek()) # 1
print(obj.pop()) # 1
print(obj.empty()) # false