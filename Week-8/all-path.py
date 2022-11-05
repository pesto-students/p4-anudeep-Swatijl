def allPathsSourceTarget(graph):
    end = len(graph) - 1
    
    def dfs(node, path, output):
        if node == end:
            output.append(path)
        
        for next in graph[node]:
            dfs(next, path+[next],output)
    
    output = []
    dfs(0, [0], output)
    return output

print(allPathsSourceTarget([[1,2],[3],[3],[]])) #[[0, 1, 3], [0, 2, 3]]

#time complexity --> O(n)