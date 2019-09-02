# Arcade > Intro > 33
# Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character.
# Return true if it's possible, and false if not.

# Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

# Ex inputArray = ["aba", "bbb", "bab"] => false

# There are 6 possible arrangements for these strings:
# ["aba", "bbb", "bab"]
# ["aba", "bab", "bbb"]
# ["bbb", "aba", "bab"]
# ["bbb", "bab", "aba"]
# ["bab", "bbb", "aba"]
# ["bab", "aba", "bbb"]
# None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.

# Ex inputArray = ["ab", "bb", "aa"] => true
# It's possible to arrange these strings in a way that each consecutive pair of strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.

def stringsRearrangement(a):
    import itertools
    s=sorted(set(list(itertools.permutations(a))))
    
    def two(t,w): #checks string with next, returns # of diffs
        return sum([t[i]!=w[i] for i in range(len(t))])
                    
    def checkOne(s): #checks one permutation
        return (all([two(s[x],s[x+1])==1 for x in range(len(s)-1)]))
    
    def checkAll(s): #checks all permutations
        for x in s:
            if checkOne(x):
                return True
    
    def function():
        for i in range(len(s[0])-1):
            if checkAll(s):
                return True
            else:
                return False
            
    return function()