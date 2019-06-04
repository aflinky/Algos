# Arcade > Intro > 22
# You are given an array of integers representing coordinates of obstacles situated on a straight line.
# Assume that you are jumping from the point with coordinate 0 to the right.
# You are allowed only to make jumps of the same length represented by some integer.
# Find the minimal length of the jump enough to avoid all the obstacles.

# Ex inputArray = [5, 3, 6, 7, 9] => 4
# inputArray : 0 1 2 x 4 x x x 8 x 10 11 12
# jumping      X-------X-------X----------X

def avoidObstacles(input):
    for i in range(2,max(input)+2, 1):
        if all(x%i!=0 for x in input):
            return i