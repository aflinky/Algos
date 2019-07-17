// Arcade > Intro > 28
// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).
// Ex input = "crazy" => "dsbaz"

const alphabeticShift = inputString =>
    inputString.split('').map(letter => 
        (letter === 'z') ? 'a' : String.fromCharCode(letter.charCodeAt() + 1)
    ).join('')