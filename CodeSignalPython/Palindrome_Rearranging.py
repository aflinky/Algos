# Arcade > Intro > 18
# Given a string, find out if its characters can be rearranged to form a palindrome
# Ex input = "aabb" => true
# Ex input = "abaa" => false

def palindromeRearranging(s):
    a=0
    for i in set(s): #iterate through set of s chars
        if s.count(i)%2 != 0: #if char appears an odd number of times
            a+=1
        if a>1:
            return False
    return True