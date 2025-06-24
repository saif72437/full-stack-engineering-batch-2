// default parameter function


function takeUserDetails(username, password, gender = "male") {
    console.log("Username", username);
    console.log("Password", password);
    console.log("Gender", gender);
    
    
    
}

takeUserDetails("saif12", "12313")
takeUserDetails("hooriya", "01293", "female")