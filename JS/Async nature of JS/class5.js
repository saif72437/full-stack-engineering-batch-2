
// fetch return a promise
fetch("https://api.github.com/users/saif72437").then((response)=>{

    // response.json() returns a promise 
    response.json().then((data)=>{
        console.log(data);
        
    })
    
})

