# Arcade > Intro > 15
# Given a rectangular matrix of characters, add a border of asterisks(*) to it
# Ex input : picture = ["abc",
#                       "ded"]
#                   => ["*****",
#                       "*abc*",
#                       "*ded*",
#                       "*****"]

def addBorder(picture):
    m = []
    r = len(picture)+2
    w = len(picture[0])+2
    for row in range(r):
        if row == 0 or row == r-1:
            m.append("*"*w)
        else:
            m.append("*" + picture[row-1] + "*")
    return m
