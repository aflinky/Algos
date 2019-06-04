# Arcade > Intro > 26
# Check if all digits of the given integer are even.

# Ex n = 248622 => true
# n = 642386 => false

def evenDigitsOnly(n):
    return all([int(d)%2==0 for d in str(n)])