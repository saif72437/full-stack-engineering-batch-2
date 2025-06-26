// arrow function

const printMyName = () => {
console.log("Saif");

}


printMyName()





// let addThreeNumbers = (num1, num2, num3 = 32) => {
//     return num1 + num2 + num3
// }


// lamda = one line arrow function
let addThreeNumbers = (num1, num2, num3 = 32) => num1 + num2 + num3

console.log(addThreeNumbers(12, 100, 200))