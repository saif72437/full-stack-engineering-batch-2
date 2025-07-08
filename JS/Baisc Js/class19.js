let num1 = 10
let num2 = 10
let num3 = 10

if((num1 > num2) && (num1 > num3)){ // false
    console.log("Num1 is greater");
    
}
else if((num2 > num1) && (num2 > num3)){ // false
    console.log("Num2 is greater");
    
}
else if((num3 > num1) && (num3 > num2)){ // false
    console.log("Num3 is greater");
    
}
else{
    console.log("All equal");
    
}