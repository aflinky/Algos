// Arcade > Intro > 15
// Given a rectangular matrix of characters, add a border of asterisks(*) to it
// Ex input : picture = ["abc",
//                       "ded"]
//                   => ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

function addBorder(p) {
    p = p.map(x=>"*"+x+"*")
    p.unshift(("*").repeat(p[0].length));
    p.push(("*").repeat(p[0].length));
    return p
}