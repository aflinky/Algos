// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
    if (num <= 1) return 0; //0 and 1
    if (num < 12) return 1; // 2-11
    if (num < 20) return 2; // 12-19
    if (num < 30) return 2 + (num-20); // 20-29
    // console.log(num, num-30, (num-30)%10)
    // console.log(JSON.stringify(num-30))
    // console.log(Math.floor(JSON.stringify(num-30)/10))
    if (num <= 100) return 12 + Math.floor(JSON.stringify(num-30)/10) + countTwos((num-30)%10); // 30-99
    // console.log(num-100)
    // console.log(JSON.stringify(num).length)
    // return (JSON.stringify(num)[0] >= 2) ? (JSON.stringify(num).length)*10 + 19 + countTwos(num-100) : (JSON.stringify(num).length-1)*10 + 19 + countTwos(num-100)
    let count = 0;
    const str = JSON.stringify(num)
    const length = str.length
    console.log(str, str[0], length)
    count += (str[0] > 2) ? length*10 : (length-1)*10;
    console.log(count)
    console.log(num%((length-1)*10))
    count += countTwos(num%((length-1)*10))
    console.log(count)
    return count;
}

console.log(countTwos(1));
// console.log(countTwos(3));
console.log(countTwos(13));
// console.log(countTwos(81));
// console.log(countTwos(84));
// console.log(countTwos(99));
// console.log(countTwos(100));
// console.log(countTwos(1000));
console.log(countTwos(11420));

module.exports = countTwos;
