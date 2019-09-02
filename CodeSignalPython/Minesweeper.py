# Arcade > Intro > 24
# In the popular Minesweeper game you have a board with some mines and
# the cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells.
# Starting off with some arrangement of mines we want to create a Minesweeper game setup.

# Ex
#              matrix = [[true, false, false],
#                        [false, true, false],
#                        [false, false, false]]
# (in other notation) = [[X,  ,  ],
#                        [ , X,  ],
#                        [ ,  ,  ]] 
# =>
# minesweeper(matrix) = [[1, 2, 1],
#                        [2, 1, 1],
#                        [1, 1, 1]]

def minesweeper(m):
    def check(i,j):
        b=0
        if i>0:
            if j>0 and m[i-1][j-1]==True:
                b+=1
            if m[i-1][j]==True:
                b+=1
            if j<len(m[0])-1 and m[i-1][j+1]==True:
                b+=1
        if j>0 and m[i][j-1]==True:
            b+=1
        if j<len(m[0])-1 and m[i][j+1]==True:
            b+=1
        if i<len(m)-1:
            if j>0 and m[i+1][j-1]==True:
                b+=1
            if m[i+1][j]==True:
                b+=1
            if j<len(m[0])-1 and m[i+1][j+1]==True:
                b+=1
        return b
        
    c=[]    
    for i in range(len(m)):
        c.append([])
        for j in range(len(m[0])):
            c[i].append(check(i,j))
    return c
        