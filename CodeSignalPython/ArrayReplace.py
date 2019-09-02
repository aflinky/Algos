# Arcade > Intro > 25
# Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

# Ex inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3
# => arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3]

def arrayReplace(i, e, s):
    return [s if x==e else x for x in i]