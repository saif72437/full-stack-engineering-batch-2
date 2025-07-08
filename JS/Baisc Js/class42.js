const User = {
    username: "Saif72437",
    firstName: "Saifullah",
    lastName: "Khan",
    age: 23,

    printData: ()=>{
        console.log("My name is Saif");
        
    },

    address:{
        city: "Mardan",
        street: "Street 1",
        latlan:{
            lat: "1239123.123",
            lan: "123123i123.123"
        }
    },

    emails: ["Saif@gmail.com", "ali@gmail.com", "muddassar@gmail.com"]
   
}

// console.log(User, typeof User);
// console.log(User.username);
// console.log(User.firstName);
// console.log(User["lastName"]);

console.log(User.printData());



// console.log(User.address);
// console.log(User.address.city);
// console.log(User.address.street);

// console.log(User.address.latlan.lan);


// console.log(User.emails[0]);
// console.log(User.emails[1]);
// console.log(User.emails[2]);


User.password = "123456"

// console.log(User.password);


console.log(User);



