# Arcade > Intro > 28
# Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).
# Ex input = "crazy" => "dsbaz"

def alphabeticShift(s):
    from string import ascii_lowercase as A
    return "".join([A[A.find(s[i])-25] for i in range(len(s))])