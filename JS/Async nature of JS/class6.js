async function getMyGithubProfileData() {
        
    const response =  await fetch("https://api.github.com/users/saif72437")
    
    const data = await response.json()

    console.log(data);
    
    
        
}

getMyGithubProfileData()