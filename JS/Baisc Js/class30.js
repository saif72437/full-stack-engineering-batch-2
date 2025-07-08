let name  = "Hooriya is my student"
let name2 = "Khan"

let mySlice1 = name.slice(2, 5)
let mySubString = name.substring(2, 5)

let mySubStr = name.substr(4, 1)

let str3 = name.concat(name2)
// console.log(str3);

console.log(name.trim());

console.log(name.padEnd(4, "x"));
// console.log(name.repeat(3))


console.log(name.replace("Hooriya", "Khan"));

let mySplitText = name.split("o")


console.log(mySplitText, typeof mySplitText);

let myString = "5"

let paddedString = myString.padEnd(4, "0")
console.log(paddedString);
