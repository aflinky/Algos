// Write a function "lockDown" that takes a callback function (func) and a string as arguments.
// The string will be a password so to speak.
// lockDown returns a function (secureFunc).
// secureFunc must be provided the password string as its first argument but may take any number (0+) of arguments after
// If the string is incorrect, 401 is returned.
// If correct, secureFunc will call func and return its output.
// If additional arguments are passed to secureFunc,
// other than the password, they should all be passed to func.

// const add = function(a, b, c) { return a + b + c }
// const secureFunc = lockDown(add, 'lolol');
// secureFunc('lolol', 1, 2, 3);   ->  return 6
// secureFunc('wrong', 1, 2, 3);   ->  401

// const multiply = function(a, b) { return a * b }
// const secureFunc = lockDown(multiply, 'lolol');
// secureFunc('lolol', 1, 2, 3);   ->  return 6
// secureFunc('wrong', 1, 2, 3);   ->  401

function lockDown(func: Function, password: string) {
  return function (pw, ...args) {
    if (pw === password) {
      return func(...args)
    }
    return 401;
  }
}

module.exports = lockDown;