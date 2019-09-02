# Arcade > Intro > 16
# Two arrays are called similar if one can be obtained from another by
# swapping at most one pair of elements in one of the arrays

# Given two arrays a and b, check whether they are similar

# Ex input: a = [1, 2, 3] and b = [1, 2, 3] => true
# Ex input: a = [1, 3, 2] and b = [1, 2, 3] => true
# Ex input: a = [1, 2, 3] and b = [1, 2, 2] => false

def areSimilar(a, b):
    if a == b: #base case (identical arrays)
        return True
    if sum(a)!= sum(b): #base case (different array elements)
        return False
    
    d=[] #will contain indices of all differences between arrays
    for i in range(len(a)):
        if a[i]!=b[i]:
            d.append(i)
        if len(d)>2: #if there are more than 2 differences
            return False
    if a[d[0]]==b[d[1]] and b[d[0]]==a[d[1]]: #if there is one pair, they should be able to be swapped
        return True
    return False