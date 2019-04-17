// Arcade > Intro > 10
// Given two strings, find the number of common characters between them
// Ex input: s1 = "aabcc" and s2 = "adcaa" => 3

function commonCharacterCount(s1, s2) {
    for (var i=0; i<s1.length; i++) { //iterates through s1
        s2= s2.replace(s1[i],"*") //replaces up to one instance of s1[i] with "*"
    }
    return s2.replace(/[^*]/g,"").length //erases all non "*" characters (all differences)
}