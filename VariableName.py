# Arcade > Intro > 27
# Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.
# Check if the given string is a correct variable name.

# Ex name = "var_1__Int" => true
# name = "qq-q" => false
# name = "2w2" => false

def variableName(name):
    if name[0].isdigit():
        return False
    name = name.replace("_","")
    return (name.isalnum())