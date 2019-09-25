// Write a function "lockDown" that takes a callback function (func) and a string as arguments. The string will be a password so to speak. lockDown returns a function (secureFunc). secureFunc must be provided the password string as its first argument. If the string is incorrect, 401 is returned. If correct, secureFunc will call func and return its output. If additional arguments are passed to secureFunc, other than the password, they should all be passed to func.

// var log = function(a, b, c) { console.log(a, b, c); }
// var secureFunc = lockDown(log, 'lolol');
// secureFunc('lolol', 1, 2, 3);   ->  prints 1 2 3
// secureFunc('wrong', 1, 2, 3);   ->  401

function lockDown(func, password) {
  return function (pw, ...args) {
    if (pw === password) {
      return func(...args)
    }
    return 401;
  }
}

var log = function(a, b, c) { console.log(a, b, c); }
var secureFunc = lockDown(log, 'lolol');
console.log(secureFunc('lolol', 1, 2, 3));
console.log(secureFunc('wrong', 1, 2, 3));