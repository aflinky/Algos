# Arcade > Intro > 10
# Given two strings, find the number of common characters between them
# Ex input: s1 = "aabcc" and s2 = "adcaa" => 3

def commonCharacterCount(s1, s2):
    from collections import Counter
    o = Counter(s1)&Counter(s2) #object containing common letters and their counts, ex Counter({'a': 2, 'c': 1})
    e = list(a.elements()) #list of all elements, ex ['a', 'a', 'c']
    return len(e)