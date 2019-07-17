# Arcade > Intro > 29
# Given two cells on the standard chess board, determine whether they have the same color or not.

# Ex For cell1 = "A1" and cell2 = "C3" => true
# Ex For cell1 = "A1" and cell2 = "H3" => false

def chessBoardCellColor(cell1, cell2):
    return (abs(int(cell1[1])-int(cell2[1])) + abs(ord(cell1[0])-ord(cell2[0])))%2==0