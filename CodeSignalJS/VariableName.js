// Arcade > Intro > 27
// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.
// Check if the given string is a correct variable name.

// Ex name = "var_1__Int" => true
// name = "qq-q" => false
// name = "2w2" => false

function variableName(name) {
    if ((Number(name[0])) || name[0]==="0") return false
    
    const isAlnum = ch => ch.match(/^[a-z0-9_]+$/i) !== null

    return isAlnum(name)
}