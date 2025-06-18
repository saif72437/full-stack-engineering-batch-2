let names = ["Saif", "Iqbal", "Mehtab", "Hooriya", "Wariha"]

console.log(names.length);

console.log(names[2]);
console.log(names.at(2));

// convert array to string

console.log(typeof names);

// it will convert array to string
// it will not change the orignal array
let myStr = names.toString() 
console.log(myStr, typeof myStr);


// it will convert array to string and it have a seprator also
let myStr2 = names.join(" * ") //  
console.log(myStr2, typeof myStr2);






