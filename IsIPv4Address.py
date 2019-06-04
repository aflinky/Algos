# Arcade > Intro > 21
# An IP address is a numerical label assigned to each device (e.g., computer, printer)
# participating in a computer network that uses the Internet Protocol for communication.
# There are two versions of the Internet protocol, and thus two versions of addresses.
# One of them is the IPv4 address.
# Given a string, find out if it satisfies the IPv4 address naming rules.

# IPv4 address is a string with the following structure: a.b.c.d, where a, b, c and d are integers in range [0, 255].
# For example, 0.0.0.0, 255.255.255.255 or 252.0.128.32 are correct IPv4 addresses,
# and 0.0.0.256, -1.1.1.1, 0.0.0.0.0 are incorrect.
# a.b is named network part and c.d is named host part.

# Ex inputString = "172.16.254.1" => true
# inputString = "172.316.254.1" => false
# inputString = ".254.255.0" => false

def isIPv4Address(s):
    s=s.split('.')
    return len(s) == 4 and all(i.isdigit() and 0 <= int(i) <= 255 for i in s)
    # if len(s)!=4:
    #     return False
    # for i in range(len(s)):
    #     if not s[i].isdigit() or (int(s[i]))>255:
    #         return False
    # return True
