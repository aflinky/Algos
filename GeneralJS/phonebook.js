/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
// function findName(jazbook, name) {
//   for (let i=0; i<jazbook.length; i++) {
//     if (jazbook[i][0][0] !== name[0]) continue
//     if (jazbook[i][0].length !== name.length) continue
//     else {
//       for (let j=1; j<name.length; j++) {
//         if (jazbook[i][0][j] !== name[j]) break
//         if (j===name.length-1) return jazbook[i][1]
//       }
//     }
//   }
//   return false
// }

// return the number associated with the name in the jazbook - Geoff
const findName = (jazbook, name) => {
  for (let entry of jazbook) {
    const [person, phoneNumber] = entry;
    if (person.toLowerCase() === name.toLowerCase()) return phoneNumber;
  }
  return false;
}

// Only works if 'jazbook' is alphabetically sorted //BST Geoff
// const findNameSorted = (jazbook, name, start = 0, end = jazbook.length) => {
//   const mid = Math.floor((start + end) / 2);
//   if (mid < 0 || mid >= jazbook.length) return false;
// ​
//   let [person, phoneNumber] = jazbook[mid];
//   person = person.toLowerCase();
//   name = name.toLowerCase();
// ​
//   if (name === person) return phoneNumber;
//   if (start === end) return false;
//   if (name < person) return findNameSorted(jazbook, name, start, mid - 1);
//   if (name > person) return findNameSorted(jazbook, name, mid + 1, end);
// }

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  this.newBook = jazbook.reduce((acc, entry) => {
    const [name, number] = entry;
    acc[name] = number;
    return acc
  }, {})
}

makePhoneBookObject.prototype.find = function(name) {
  if (this.newBook.hasOwnProperty(name)) return this.newBook[name]
  return false
}
makePhoneBookObject.prototype.add = function(newName, newNumber) {
  this.newBook[newName] = newNumber
}

// class makePhoneBookObject {
//   constructor(jazbook) {
//     this.phoneBook = jazbook.reduce((phoneBook, entry) => {
//       const [name, phoneNumber] = entry;
//       phoneBook[name.toLowerCase()] = phoneNumber;
//       return phoneBook;
//     }, {});
//   }
// ​
//   setEntry(name, phoneNumber) {
//     this.phoneBook[name.toLowerCase()] = phoneNumber;
//     return [name, phoneNumber];
//   }
// ​
//   getNumber(name) {
//     return this.phoneBook[name.toLowerCase()];
//   }
// ​
//   getName(phoneNumber) {
//     for (let name in this.phoneBook) {
//       if (this.phoneBook[name] === phoneNumber) return name;
//     }
//   }
// ​
//   deleteEntry(name) {
//     name = name.toLowerCase();
//     if (!this.phoneBook.hasOwnProperty(name)) return undefined;
//     delete this.phoneBook[name];
//     return name;
//   }
// }

// let book = [
//   ['alex','301-844-3421'],
//   ['jae','301-844-1211'],
//   ['david','301-844-0978'],
//   ['travis','301-844-8505'],
//   ['jasmin','1800-974-jk4539'],
//   ['jasmine','1800-974-4539'],
// ]
// console.log(findName(book, "jasmine"))
// const meow = new makePhoneBookObject(book)
// console.log(meow)
// console.log(meow.add("maya", '914'))
// console.log(meow)

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
