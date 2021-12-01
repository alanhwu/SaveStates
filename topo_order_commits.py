import os
import sys
import zlib
import copy
from collections import deque

#Part 3 class
class CommitNode:
    def __init__(self, commit_hash):
        """
        :type commit_hash: str
        """
        self.commit_hash = commit_hash
        self.parents = set()
        self.children = set()

#Part 1 helper
def get_git_directory():
    cwd = os.getcwd()
    while (cwd != "/"):
        if (os.path.exists(cwd + "/.git")):
            return cwd + "/.git"
        else:
            cwd = os.path.dirname(cwd)
    print("Not inside a Git repository")
    exit(1)

#Part 2 helper
def get_git_branches(dir):
    cwd = dir + "/refs/heads/"
    heads = os.listdir(cwd)
    commits = {}
    for x in heads:
        if (os.path.isfile(cwd + x)): #probably wrong syntax                                                                                                    
            file = open(cwd + x, 'r')
            hash = file.readline().strip()
            if hash in list(commits.keys()):
                commits[hash].append(x)
            else:
                commits[hash] = [x]                                                                                
            file.close()
        elif x == None:
            continue
        elif (os.path.isdir(cwd + x)): # else if (os.path.isdir(x)): # most likely wrong again                                                                  
            for i in os.listdir(cwd + x):
                file = open(cwd + x + "/" + i, 'r')
                hash = file.readline().strip()
                if hash in list(commits.keys()):
                    commits[hash].append(x + "/" + i)
                else:
                    commits[hash] = [x + "/" + i]   
                file.close()
    return commits

#Part 3 helper 
def build_commit_graph(git_dir, local_branch_heads):
    fileHash = git_dir + "/objects/"
    commit_nodes = {} #Represents your graph
    visited = set() 
    stack = copy.deepcopy(local_branch_heads)
    while stack:       
        commit_hash = stack.pop()
        #Replace with Code - Get the next element from stack, store it in commit_hash, and remove it from stack (done)
        if commit_hash in visited:     
            continue      
            #Replace with code - What do you do if the commit we’re on is already in visited? (done)
        visited.add(commit_hash)
        if commit_hash not in commit_nodes:
            commit_nodes[commit_hash] = CommitNode(commit_hash)          
            #Replace with code - Create a commit node and store it in the graph for later use (done)
        commit = commit_nodes[commit_hash] #Replace with Code - Using commit_hash, retrieve commit node object from graph (done)
        compressed_file = open(fileHash + commit_hash[:2] + "/" + commit_hash[2:], 'rb').read()
        commit.parents = zlib.decompress(compressed_file).decode().split('\n')
        #Replace with Code - Find commit_hash in the objects folder, decompress it, and get parent commits (!)
        for p in commit.parents:
            if p not in visited:               
                stack.append(p)
                #Replace with Code - What do we do if p isn’t in visited?
            if p not in commit_nodes:    
                commit_nodes[p] = CommitNode(p)           
                #Replace with Code - What do we do if p isn’t in commit_nodes (graph)?       
            commit_nodes[p].children.add(commit_hash)
            #Replace with Code - Record that commit_hash is a child of commit node p
    return commit_nodes

#Part 4 helper
def topological_sort(commit_nodes):
    result = []           # commits we have processed and are now sorted
    no_children = deque() # commits we can process now 
    copy_graph = copy.deepcopy(commit_nodes) # Copy graph so we don't erase info

    # If the commit has no children, we can process it
    for commit_hash in copy_graph:
        if len(copy_graph[commit_hash].children) == 0:
            no_children.append(commit_hash)

    #Loop through until all commits are processed
    while len(no_children) > 0:
        commit_hash = no_children.popleft()
        result.append(commit_hash)

        # Now that we are processing commit, remove all connecting edges to parent commits
        # And add parent to processing set if it has no more children after
        for parent_hash in list(copy_graph[commit_hash].parents):
            copy_graph[commit_hash].parents.remove(parent_hash)
            # Replace with code - Remove parent hash from current commit parents
            copy_graph[commit_hash].children.remove(parent_hash)
            # Replace with code - Remove child hash from parent commit children
            if (len(copy_graph[parent_hash].children) == 0):
                no_children.append(parent_hash)
            # Replace with code - How do we check if parent has no children

    # Error check at the end
    if len(result) < len(commit_nodes):
        raise Exception("cycle detected")
    return result

#Step 5 helper
def print_topo_ordered_commits_with_branch_names(commit_nodes, topo_ordered_commits, head_to_branches):
    jumped = False
    for i in range(len(topo_ordered_commits)):
        commit_hash = topo_ordered_commits[i]
        if jumped:
            jumped = False
            sticky_hash = ' '.join(commit_nodes[commit_hash].children)
            print(f'={sticky_hash}')
        branches = sorted(head_to_branches[commit_hash]) if commit_hash in head_to_branches else []
        print(commit_hash + (' ' + ' '.join(branches) if branches else ''))
        if i+1 < len(topo_ordered_commits) and topo_ordered_commits[i+1] not in commit_nodes[commit_hash].parents:
            jumped = True
            sticky_hash = ' '.join(commit_nodes[commit_hash].parents)
            print(f'{sticky_hash}=\n')



def topo_order_commits():
        #Get git directory (can be helper function)                                                                                                             
    cwd = get_git_directory()
        #Get list of local branch names (can be helper function)                                                                                                
    gitBranches = get_git_branches(cwd)
        #Build the commit graph (can be helper function)
    local_branch_heads = list(gitBranches.keys())
    commit_nodes = build_commit_graph(cwd, local_branch_heads)
        #Topologically sort the commit graph (can be helper fnction) 
    topological_sort(commit_nodes)                                                                                           
        #Print the sorted order (can be helper function)                                                                                                        
    head_to_branches = {}
    for x in gitBranches:
        if x in list(head_to_branches.keys()):
            for i in gitBranches[x]:
                head_to_branches[x].append(i)
        else:
            head_to_branches[hash] = []
            for i in gitBranches[x]:
                head_to_branches[x].append(i)
    print_topo_ordered_commits_with_branch_names(commit_nodes, topo_order_commits, head_to_branches)
if __name__ == '__main__':
    topo_order_commits()
